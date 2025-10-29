/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.eduhustawka.pl',
  generateRobotsTxt: false, // we already have robots.txt; set to true if you want auto-generated
  sitemapSize: 5000,
  changefreq: 'monthly',
  priority: 0.5,
  // exclude: ['/api/*'],
  transform: async (config, path) => {
    // allow custom lastmod or other transforms later
    return {
      loc: path,
      changefreq: 'monthly',
      priority: path === '/' ? 1.0 : 0.5,
      lastmod: new Date().toISOString().split('T')[0],
    };
  },
};
