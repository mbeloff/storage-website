const SitemapPlugin = require('sitemap-webpack-plugin').default
const paths = [
  {
    path: '/',
    priority: '0.8'
  },
  {
    path: '/faq',
    priority: '0.6'
  },
  {
    path: '/selfstorage',
    priority: '0.8'
  },
  {
    path: '/workshops'
  },
  {
    path: '/mobilestorage'
  },
  {
    path: '/autostorage'
  },
  {
    path: '/about',
    priority: '0.6'
  }
]
module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin('https://gabbastorage.com.au', paths, {
        lastmod: true,
        changefreq: 'monthly',
        priority: '0.5'
      })
    ]
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Gabba Storage - The Cheapest Self Storage in Brisbane'
    }
  }
}
