module.exports = {
  outputDir: process.env.TC_TARGET ? 'lib' : 'dist',
  pwa: {
    manifestOptions: {
      display: 'fullscreen',
      // eslint-disable-next-line @typescript-eslint/camelcase
      start_url: '.'
    },
    name: 'TC Components',
    themeColor: '#f0f0f0',
    msTileColor: '#ff4757',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    iconPaths: {
      favicon32: 'pwa/favicon-32.png',
      favicon16: 'pwa/favicon-16.png',
      appleTouchIcon: 'pwa/splash/manifest-icon-512.jpg',
      maskIcon: 'pwa/maskIcon.svg',
      msTileImage: 'pwa/msTileImage-144.png'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData:
          "@import '@/tccomponents/_variables.scss';\n@import '@/tccomponents/_mixins.scss';"
      }
    }
  }
};
