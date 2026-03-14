import { analyticsQueries, queryDateTypes } from "@/app/constants/constants";

export async function POST(req) {
  // Security check
  const secret = req.headers.get("x-analytics-deploy-secret");
  console.log("secret: ", secret);
  console.log("process.env.ANALYTICS_DEPLOY_SECRET: ", process.env.ANALYTICS_DEPLOY_SECRET);

  if (secret !== process.env.ANALYTICS_DEPLOY_SECRET) {
    return new Response(JSON.stringify({ error: "Unauthorized access" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    let { siteId = "", siteDomain = "", queryType = "", dateType = "" } = body;

    if (!siteId || !siteDomain || !queryType || !dateType) {
      return new Response(
        JSON.stringify({
          error:
            "Invalid site id, site domain, query type or date type. Check request parameters and try again.",
        }),
        {
          status: 400,
        },
      );
    }

    queryType = queryType.toUpperCase();
    dateType = dateType.toUpperCase();

    const dateRange = queryDateTypes[dateType];
    const query = analyticsQueries[queryType](siteId, siteDomain, dateRange);

    /************* POSTHOG QUERY *************/
    const posthogResponse = await fetch(
      `https://us.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/query/`,
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.POSTHOG_API_TOKEN}`,
        },
        body: JSON.stringify({
          query: {
            kind: "HogQLQuery",
            query: query,
          },
          name: "all_events",
        }),
      },
    );

    if (!posthogResponse.ok) {
      const errorText = await posthogResponse.text();
      throw new Error(`PostHog API error: ${errorText}`);
    }

    const posthogData = await posthogResponse.json();

    return new Response(
      JSON.stringify({
        success: true,
        siteId,
        siteDomain,
        queryType,
        dateType,
        query,
        result: posthogData?.results,
      }),
      {
        status: 200,
      },
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({
        error: "Wrapper analytics failed. Please check the server logs.",
      }),
      {
        status: 500,
      },
    );
  }
}
