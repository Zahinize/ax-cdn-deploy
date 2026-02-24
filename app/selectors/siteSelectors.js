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
            ".entry > .entry-content p:nth-of-type(2)",
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
            ".entry-content p",
            ".entry-content > .wp-block-image",
            ".wrapper-penci-recipe",
          ],
        },
      },
      ATF_SIDEBAR: {
        selector: "#sidebar > .theiaStickySidebar",
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
            ".grid.grid-cols-1 > div:first-child > div:nth-child(2)",
            ".grid.grid-cols-1 > div:first-child > #section-1",
            ".grid.grid-cols-1 > div:first-child > #section-2",
          ],
        },
      },
      ATF_SIDEBAR: {
        selector: ".container > .grid > aside",
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
    site.ads.ATF_SIDEBAR.selector;

  if (!isValidSite) return inputConfig;

  inputConfig.siteAds.MANUAL.selectorArr = structuredClone(site.ads.MANUAL.selectorArr);
  if (site.ads.MANUAL.customCSS) {
    inputConfig.siteAds.MANUAL.customCSS = structuredClone(site.ads.MANUAL.customCSS);
  }
  inputConfig.siteAds.INCONTENT.selectors = structuredClone(site.ads.INCONTENT.selectors);
  inputConfig.siteAds.ATF_SIDEBAR.selector = structuredClone(site.ads.ATF_SIDEBAR.selector);

  return inputConfig;
}

export { updateAdSelectors };
