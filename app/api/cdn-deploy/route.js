import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

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
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const { config = {} } = body;
    const { siteDomain: domain = "" } = config;

    if (!domain || !config) {
      return new Response(
        JSON.stringify({ error: "domain and config required" }),
        {
          status: 400,
        },
      );
    }

    const bucket = process.env.S3_BUCKET_NAME;

    // -------- 1) Upload Config JSON --------
    const configKey = `configs/${domain}.json`;

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
    const scriptContent = `
(function() {
  window.AD_ENGINE_CONFIG = ${JSON.stringify(config)};
  var s = document.createElement('script');
  s.src = "https://cdn.yourdomain.com/core/ad-engine.js";
  s.async = true;
  document.head.appendChild(s);
})();`;
    const scriptKey = `scripts/${domain}.js`;

    await s3.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: scriptKey,
        Body: scriptContent,
        ContentType: "application/javascript",
        CacheControl: "public, max-age=60",
      }),
    );

    return new Response(
      JSON.stringify({
        success: true,
        configUrl: `/configs/${domain}.json`,
        scriptUrl: `/scripts/${domain}.js`,
      }),
      {
        status: 200,
      },
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "CloudFront CDN deployment failed" }),
      {
        status: 500,
      },
    );
  }
}
