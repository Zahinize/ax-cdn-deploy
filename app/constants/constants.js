const analyticsQueries = {
  ALL_EVENTS: (
    siteId,
    siteDomain,
    dateType,
  ) => `select event, count() as event_count from all_events as ae 
  where ae.site_id = ${siteId} and ae.site_domain = '${siteDomain}'
  and ${dateType} group by event order by event_count desc;`,

  PAGEVIEW_VS_GPTLOADED: (
    siteId,
    siteDomain,
    dateType,
  ) => `select event, timestamp from all_events as ae 
  where ae.site_id = ${siteId} and ae.site_domain = '${siteDomain}' 
  and ${dateType} order by timestamp desc limit 50000;`,

  VENDOR_TAGS: (
    siteId,
    siteDomain,
    dateType,
  ) => `select event, count() as event_count from all_events as ae 
  where ae.site_id = ${siteId} and ae.site_domain = '${siteDomain}' 
  and ${dateType} and event like '%_loaded%' and event != 'gpt_loaded' group by event order by event_count desc;`,

  TOP_URLS: (
    siteId,
    siteDomain,
    dateType,
  ) => `select ae.page_url, count() as event_count from all_events as ae 
  where ae.site_id = ${siteId} and ae.site_domain = '${siteDomain}' 
  and ${dateType} group by ae.page_url order by event_count desc limit 10;`,
};

const queryDateTypes = {
  TODAY: "toDate(timestamp) = today()",
  YESTERDAY: "toDate(timestamp) = yesterday()",
  LAST_7_DAYS: "timestamp > now() - INTERVAL 7 DAY AND timestamp <= now()",
  LAST_14_DAYS: "timestamp > now() - INTERVAL 14 DAY AND timestamp <= now()",
  LAST_30_DAYS: "timestamp > now() - INTERVAL 30 DAY AND timestamp <= now()",
  MONTH_TO_DATE: "timestamp >= toStartOfMonth(now()) AND timestamp <= now()",
  YEAR_TO_DATE: "timestamp >= toStartOfYear(now()) AND timestamp <= now()",
};

export { analyticsQueries, queryDateTypes };
