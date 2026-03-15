const analyticsQueries = {
  ALL_EVENTS: (siteClause, dateType) =>
    `select event, count() as event_count from all_events as ae where ${siteClause}${dateType} group by event order by event_count desc;`,

  PAGEVIEW_VS_GPTLOADED: (siteClause, dateType) =>
    `select event, timestamp from all_events as ae where ${siteClause}${dateType} order by timestamp desc limit 50000;`,

  VENDOR_TAGS: (siteClause, dateType) =>
    `select event, count() as event_count from all_events as ae where ${siteClause}${dateType} and event like '%_loaded%' and event != 'gpt_loaded' group by event order by event_count desc;`,

  TOP_URLS: (siteClause, dateType) =>
    `select ae.page_url, count() as event_count from all_events as ae where ${siteClause}${dateType} group by ae.page_url order by event_count desc limit 10;`,

  TOP_PLATFORMS: (siteClause, dateType) =>
    `select ae.platform, count() as event_count from all_events as ae where ${siteClause}${dateType} group by ae.platform order by event_count desc;`,

  TOP_BROWSERS: (siteClause, dateType) =>
    `select ae.browser, count() as event_count from all_events as ae where ${siteClause}${dateType} group by ae.browser order by event_count desc;`,

  TOP_DEVICES: (siteClause, dateType) =>
    `select ae.device, count() as event_count from all_events as ae where ${siteClause}${dateType} group by ae.device order by event_count desc;`,

  TOP_CITIES: (siteClause, dateType) =>
    `select ae.city, count() as event_count from all_events as ae where ${siteClause}${dateType} group by ae.city order by event_count desc;`,

  TOP_COUNTRIES: (siteClause, dateType) =>
    `select ae.country, count() as event_count from all_events as ae where ${siteClause}${dateType} group by ae.country order by event_count desc;`,
};

const queryDateTypes = {
  TODAY: "toDate(timestamp) = today()",
  YESTERDAY: "toDate(timestamp) = yesterday()",
  LAST_7_DAYS: "timestamp > now() - INTERVAL 7 DAY AND timestamp <= now()",
  LAST_14_DAYS: "timestamp > now() - INTERVAL 14 DAY AND timestamp <= now()",
  LAST_30_DAYS: "timestamp > now() - INTERVAL 30 DAY AND timestamp <= now()",
  LAST_90_DAYS: "timestamp > now() - INTERVAL 90 DAY AND timestamp <= now()",
  MONTH_TO_DATE: "timestamp >= toStartOfMonth(now()) AND timestamp <= now()",
  YEAR_TO_DATE: "timestamp >= toStartOfYear(now()) AND timestamp <= now()",
};

export { analyticsQueries, queryDateTypes };
