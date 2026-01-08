/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://getwellbksc.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  outDir: "public", // ✅ THIS IS THE FIX
};


