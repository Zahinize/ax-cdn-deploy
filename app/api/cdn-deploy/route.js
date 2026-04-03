import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { updateAdSelectors } from "@/app/selectors/siteSelectors";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function POST(req) {
  // Basic security
  const secret = req.headers.get("x-deploy-secret");
  console.log("secret: ", secret);
  console.log("process.env.DEPLOY_SECRET: ", process.env.DEPLOY_SECRET);

  if (secret !== process.env.DEPLOY_SECRET) {
    return new Response(JSON.stringify({ error: "Unauthorized access" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    let { config = {} } = body;
    const { siteDomain: domain = "", uniqueId = "" } = config;

    if (!config || !Object.keys(config).length || !domain || !uniqueId) {
      return new Response(
        JSON.stringify({
          error:
            "Invalid site domain, uniqueId or config. Check the publisher configuration and try again.",
        }),
        {
          status: 400,
        },
      );
    }

    config = updateAdSelectors(config);
    const bucket = process.env.S3_BUCKET_NAME;

    // -------- 1) Upload Config JSON --------
    const configKey = `configs/${uniqueId}.json`;

    await s3.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: configKey,
        Body: JSON.stringify(config),
        ContentType: "application/json",
        CacheControl: "public, max-age=60",
      }),
    );

    // -------- 2) Generate Ad Script --------
    const wrapperUrl = process.env.WRAPPER_SCRIPT_URL;
    const wrapperResponse = await fetch(wrapperUrl);

    if (!wrapperResponse.ok) {
      throw new Error(`Failed to fetch ax.js script to generate ${domain} JS wrapper.`);
    }

    let scriptContent = await wrapperResponse.text();
    // Inject site config
    scriptContent = scriptContent.replace("__AX_SITE_CONFIG__", JSON.stringify(config));
    const scriptKey = `scripts/${uniqueId}.js`;

    await s3.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: scriptKey,
        Body: scriptContent,
        ContentType: "application/javascript",
        CacheControl: "public, max-age=60",
      }),
    );

    // -------- 3) Generate Ad 1X1 tag --------
    const onexonetagUrl = process.env.WRAPPER_1X1_TAG_URL;
    const tagResponse = await fetch(onexonetagUrl);

    if (!tagResponse.ok) {
      throw new Error(`Failed to fetch 1x1.js script to generate ${domain} 1x1 tag.`);
    }

    const generatedWrapperUrl = `${process.env.WRAPPER_BASE_URL}${uniqueId}.js`;
    let tagContent = await tagResponse.text();
    // Inject site wrapper URL
    tagContent = tagContent.replace(/__AX_WRAPPER_URL__/g, generatedWrapperUrl);

    const tagKey = `scripts/${uniqueId}_1x1.js`;

    await s3.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: tagKey,
        Body: tagContent,
        ContentType: "application/javascript",
        CacheControl: "public, max-age=60",
      }),
    );

    return new Response(
      JSON.stringify({
        success: true,
        configUrl: configKey,
        scriptUrl: scriptKey,
        tagUrl: tagKey,
      }),
      {
        status: 200,
      },
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({
        error: "CloudFront deployment failed. Please check the server logs.",
      }),
      {
        status: 500,
      },
    );
  }
}
