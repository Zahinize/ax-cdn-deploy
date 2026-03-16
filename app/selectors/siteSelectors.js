const siteConfig = {
  "bakewithshivesh.com": {
    siteDomain: "bakewithshivesh.com",
    ads: {
      MANUAL: {
        selectorArr: [
          {
            urls: ["^https?://bakewithshivesh.com(?:/.*)?$"],
            platform: {
              desktop: {
                selectors: [
                  // Site Header
                  ".site-container > .nav-secondary",
                  // Recipe Article List Page
                  ".content#genesis-content > article.post:nth-of-type(1)",
                  ".content#genesis-content > article.post:nth-of-type(2)",
                  // Recipe Index Page
                  ".content#genesis-content .entry-content ul > li:nth-child(4)",
                  ".content#genesis-content .entry-content ul > li:nth-child(12)",
                  ".content#genesis-content .entry-content ul > li:nth-child(20)",
                ],
                sizes: [
                  [728, 90],
                  [970, 90],
                ],
              },
              mobile: {
                selectors: [
                  // Site Header
                  ".site-container > .nav-secondary",
                  // Recipe Article List Page
                  ".content#genesis-content > article.post:nth-of-type(1)",
                  ".content#genesis-content > article.post:nth-of-type(2)",
                  // Recipe Index Page
                  ".content#genesis-content .entry-content ul > li:nth-child(4)",
                  ".content#genesis-content .entry-content ul > li:nth-child(12)",
                  ".content#genesis-content .entry-content ul > li:nth-child(20)",
                ],
                sizes: [
                  [336, 280],
                  [300, 250],
                  [250, 250],
                  [320, 100],
                  [468, 60],
                  [320, 50],
                  [300, 50],
                ],
              },
              tablet: {
                selectors: [
                  // Site Header
                  ".site-container > .nav-secondary",
                  // Recipe Article List Page
                  ".content#genesis-content > article.post:nth-of-type(1)",
                  ".content#genesis-content > article.post:nth-of-type(2)",
                  // Recipe Index Page
                  ".content#genesis-content .entry-content ul > li:nth-child(3)",
                  ".content#genesis-content .entry-content ul > li:nth-child(9)",
                  ".content#genesis-content .entry-content ul > li:nth-child(15)",
                ],
                sizes: [
                  [336, 280],
                  [300, 250],
                  [250, 250],
                  [320, 100],
                  [468, 60],
                  [320, 50],
                  [300, 50],
                ],
              },
            },
          },
        ],
      },
      INCONTENT: {
        selectors: {
          root: ".entry > .entry-content > .swp_social_panel.swp_horizontal_panel:first-child",
          content: [
            ".entry > .entry-content p:nth-of-type(4)",
            ".entry > .entry-content p:nth-of-type(7)",
            ".entry > .entry-content p:nth-of-type(10)",
            ".entry > .entry-content p:nth-of-type(13)",
            ".entry > .entry-content > .easyrecipe",
          ],
        },
      },
      ATF_SIDEBAR: {
        selector: "aside.sidebar",
      },
      MID_SCROLL: {
        selectors: {
          content: [
            ".entry > .entry-content > .swp_social_panel.swp_horizontal_panel:first-child ~ p:nth-of-type(2)",
          ],
        },
      },
    },
  },
  "madhurasrecipe.com": {
    siteDomain: "madhurasrecipe.com",
    ads: {
      MANUAL: {
        selectorArr: [
          {
            urls: ["^https?://madhurasrecipe.com(?:/.*)?$"],
            platform: {
              desktop: {
                selectors: [
                  ".wrapper-boxed.header-style-header-3 > .penci-header-wrap",
                  ".elementor-element-15e5b2b.elementor-section-boxed > .elementor-container",
                ],
                sizes: [
                  [728, 90],
                  [970, 90],
                ],
              },
              mobile: {
                selectors: [
                  ".wrapper-boxed.header-style-header-3 > .penci-header-wrap",
                  ".elementor-element-15e5b2b.elementor-section-boxed > .elementor-container",
                ],
                sizes: [
                  [336, 280],
                  [300, 250],
                  [250, 250],
                  [320, 100],
                  [468, 60],
                  [320, 50],
                  [300, 50],
                ],
              },
              tablet: {
                selectors: [
                  ".wrapper-boxed.header-style-header-3 > .penci-header-wrap",
                  ".elementor-element-15e5b2b.elementor-section-boxed > .elementor-container",
                ],
                sizes: [
                  [728, 90],
                  [970, 90],
                ],
              },
            },
          },
        ],
        customCSS: [
          {
            selector: ".wrapper-boxed.header-style-header-3 > .penci-header-wrap",
            css: {
              "margin-bottom": "60px",
            },
          },
        ],
      },
      INCONTENT: {
        selectors: {
          root: ".post-entry > .entry-content",
          content: [
            ".entry-content > .hustle-ui.hustle-inline",
            ".entry-content > .wp-block-image",
            ".wrapper-penci-recipe",
          ],
        },
      },
      ATF_SIDEBAR: {
        selector: "#sidebar > .theiaStickySidebar",
      },
      MID_SCROLL: {
        selectors: {
          content: [".entry-content p"],
        },
      },
    },
  },
  "mughlaikitchen.lovable.app": {
    siteDomain: "mughlaikitchen.lovable.app",
    ads: {
      MANUAL: {
        selectorArr: [
          {
            urls: ["^https?://mughlaikitchen.lovable.app(?:/.*)?$"],
            platform: {
              desktop: {
                selectors: ["main > section:first-child", "main > section:nth-of-type(2)"],
                sizes: [
                  [728, 90],
                  [970, 90],
                ],
              },
              mobile: {
                selectors: ["main > section:first-child", "main > section:nth-of-type(2)"],
                sizes: [
                  [336, 280],
                  [300, 250],
                  [250, 250],
                  [320, 100],
                  [468, 60],
                  [320, 50],
                  [300, 50],
                ],
              },
              tablet: {
                selectors: ["main > section:first-child", "main > section:nth-of-type(2)"],
                sizes: [
                  [728, 90],
                  [970, 90],
                ],
              },
            },
          },
        ],
      },
      INCONTENT: {
        selectors: {
          root: ".grid.grid-cols-1 > div:first-child",
          content: [
            ".grid.grid-cols-1 > div:first-child > #section-1",
            ".grid.grid-cols-1 > div:first-child > #section-2",
          ],
        },
      },
      ATF_SIDEBAR: {
        selector: ".container > .grid > aside",
      },
      MID_SCROLL: {
        selectors: {
          content: [".grid.grid-cols-1 > div:first-child > div:nth-child(2)"],
        },
      },
    },
  },
  "zeenews.india.com": {
    siteDomain: "zeenews.india.com",
    ads: {
      MANUAL: {
        selectorArr: [
          {
            urls: ["^https?://zeenews.india.com(?:/.*)?$"],
            platform: {
              desktop: {
                selectors: [
                  // Site Header
                  "#sticky_header_main",
                  // Latest News Section
                  ".container.catergory-section-container .col-md-9 > .row.no-gutters",
                  // Photo Gallery
                  ".container.catergory-section-container .col-md-9 > .category-photos",
                  // Category Thumbnail
                  ".container.catergory-section-container .col-md-9 > .category-thumbnail",
                  // More News Section
                  ".container.catergory-section-container .col-md-9 > .more-news-section > .row.morenews-block:nth-of-type(3)",
                  // MainContent News (T20 World Cup 2026 News)
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(3)",
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(6)",
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(10)",
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(14)",
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(19)",
                ],
                sizes: [
                  [728, 90],
                  [970, 90],
                ],
              },
              mobile: {
                selectors: [
                  // Site Header
                  "#sticky_header_main",
                  // Latest News Section
                  ".container.catergory-section-container .col-md-9 > .row.no-gutters",
                  // Photo Gallery
                  ".container.catergory-section-container .col-md-9 > .category-photos",
                  // Category Thumbnail
                  ".container.catergory-section-container .col-md-9 > .category-thumbnail",
                  // More News Section
                  ".container.catergory-section-container .col-md-9 > .more-news-section > .row.morenews-block:nth-of-type(3)",
                  // MainContent News (T20 World Cup 2026 News)
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(3)",
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(6)",
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(10)",
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(14)",
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(19)",
                ],
                sizes: [
                  [336, 280],
                  [300, 250],
                  [250, 250],
                  [320, 100],
                  [468, 60],
                  [320, 50],
                  [300, 50],
                ],
              },
              tablet: {
                selectors: [
                  // Site Header
                  "#sticky_header_main",
                  // Latest News Section
                  ".container.catergory-section-container .col-md-9 > .row.no-gutters",
                  // Photo Gallery
                  ".container.catergory-section-container .col-md-9 > .category-photos",
                  // Category Thumbnail
                  ".container.catergory-section-container .col-md-9 > .category-thumbnail",
                  // More News Section
                  ".container.catergory-section-container .col-md-9 > .more-news-section > .row.morenews-block:nth-of-type(3)",
                  // MainContent News (T20 World Cup 2026 News)
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(3)",
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(6)",
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(10)",
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(14)",
                  ".container.catergory-section-container .col-12.col-md-9.maincontent > .news_item:nth-of-type(19)",
                ],
                sizes: [
                  [336, 280],
                  [300, 250],
                  [250, 250],
                  [320, 100],
                  [468, 60],
                  [320, 50],
                  [300, 50],
                ],
              },
            },
          },
        ],
      },
      INCONTENT: {
        selectors: {
          root: ".container > .row > .col-md-9 > .article_content",
          content: [
            ".container > .row > .col-md-9 > #Readmore_height .article_content.article_description p",
          ],
        },
      },
      ATF_SIDEBAR: {
        selector: ".container > .row > .col-md-3",
      },
      MID_SCROLL: {
        selectors: {
          content: [".container > .row > .col-md-9 > .article_content + .article_content"],
        },
      },
    },
  },
  "udn.com": {
    siteDomain: "udn.com",
    ads: {
      MID_SCROLL: {
        selectors: {
          content: [
            ".container > .wrapper-left > .article-content__wrapper .article-content__editor p:nth-of-type(8)",
          ],
        },
      },
    },
  },
  "nownews.com": {
    siteDomain: "nownews.com",
    ads: {
      MID_SCROLL: {
        selectors: {
          content: [
            ".mainBlk .listBlk .list-wrap li:nth-child(2)",
            ".mainBlk #articleContent > font:nth-of-type(2)",
          ],
        },
      },
    },
  },
  "moneycontrol.com": {
    siteDomain: "moneycontrol.com",
    ads: {
      MID_SCROLL: {
        selectors: {
          content: [
            ".page_wrapper .page_left_wrapper .content_wrapper p:nth-of-type(3)",
            "#left #cagetory > #newslist-5",
          ],
        },
      },
    },
  },
  "thehindu.com": {
    siteDomain: "thehindu.com",
    ads: {
      MID_SCROLL: {
        selectors: {
          content: [".container.article-section .storyline .schemaDiv p:nth-of-type(2)"],
        },
      },
    },
  },
  "indianexpress.com": {
    siteDomain: "indianexpress.com",
    ads: {
      MID_SCROLL: {
        selectors: {
          content: ["#pcl-full-content p:nth-of-type(1)"],
        },
      },
    },
  },
  "financialexpress.com": {
    siteDomain: "financialexpress.com",
    ads: {
      MID_SCROLL: {
        selectors: {
          content: ["#pcl-full-content p:nth-of-type(2)"],
        },
      },
    },
  },
  "thehindubusinessline.com": {
    siteDomain: "thehindubusinessline.com",
    ads: {
      MID_SCROLL: {
        selectors: {
          content: [".article-main #ControlPara p:nth-of-type(2)"],
        },
      },
    },
  },
  "india.com": {
    siteDomain: "india.com",
    ads: {
      MID_SCROLL: {
        selectors: {
          content: [".article-details h2 + p"],
        },
      },
    },
  },
};

function updateAdSelectors(inputConfig) {
  if (!inputConfig || !Object.keys(inputConfig).length) {
    return inputConfig;
  }

  // inputConfig is the site config which comes in the POST API request
  const { siteDomain = "" } = inputConfig;
  const site = siteConfig[siteDomain];
  const isValidSite =
    site &&
    site.siteDomain === siteDomain &&
    site.ads.MANUAL &&
    Array.isArray(site.ads.MANUAL.selectorArr) &&
    site.ads.INCONTENT &&
    Object.keys(site.ads.INCONTENT.selectors).length &&
    site.ads.ATF_SIDEBAR &&
    site.ads.ATF_SIDEBAR.selector &&
    site.ads.MID_SCROLL &&
    Object.keys(site.ads.MID_SCROLL.selectors).length;

  if (!isValidSite) return inputConfig;

  inputConfig.siteAds.MANUAL.selectorArr = structuredClone(site.ads.MANUAL.selectorArr);
  if (site.ads.MANUAL.customCSS) {
    inputConfig.siteAds.MANUAL.customCSS = structuredClone(site.ads.MANUAL.customCSS);
  }
  inputConfig.siteAds.INCONTENT.selectors = structuredClone(site.ads.INCONTENT.selectors);
  inputConfig.siteAds.ATF_SIDEBAR.selector = structuredClone(site.ads.ATF_SIDEBAR.selector);
  inputConfig.siteAds.MID_SCROLL.selectors = structuredClone(site.ads.MID_SCROLL.selectors);

  return inputConfig;
}

export { updateAdSelectors };
