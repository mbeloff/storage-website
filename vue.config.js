const SitemapPlugin = require('sitemap-webpack-plugin').default
const paths = [
  {
    path: '/',
    name: 'Home',
    priority: '0.8'
  },
  {
    path: '/faq',
    name: 'faq',
    priority: '0.6'
  },
  {
    path: '/selfstorage',
    name: 'self storage'
  },
  {
    path: '/workshops',
    name: 'workshops'
  },
  {
    path: '/mobilestorage',
    name: 'mobile storage'
  },
  {
    path: '/autostorage',
    name: 'auto storage'
  },
  {
    path: '/location',
    name: 'Location',
    priority: '0.6'
  },
  {
    path: '/success',
    name: 'Success'
  },
  {
    path: '/404',
    name: '404'
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
      title: 'Gabba Storage - Budget Self Storage and Workshop Space'
    }
  }
}
