//const manifestJSON = require('./public/manifest.json')
module.exports = {
    chainWebpack: (config) => {
        //if (process.env.NODE_ENV === 'development') {
          config.plugins.delete('preload')
         
        //}
    },
    pwa: {
        //themeColor: manifestJSON.theme_color,
        // name: manifestJSON.short_name,
        // msTileColor: manifestJSON.background_color,
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          swSrc: 'service-worker.js',
        },
      },
    
    devServer: {
     
      before: app => {
        app.set('etag', 'strong')
        app.use((req, res, next) => {
            console.log('Hidddddddddddddddddd')
          res.set('Cache-Control', 'must-revalidate')
          next()
        })
      }
    }
}



