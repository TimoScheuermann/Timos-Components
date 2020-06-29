module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(([options = {}]) => {
      return [
        {
          ...options, // these are the env variables from your .env file, if any arr defined
          VERSION: JSON.stringify(require('./package.json').version)
        }
      ];
    });
  },
  outputDir: process.env.TC_TARGET ? 'lib' : 'dist',
  css: {
    loaderOptions: {
      sass: {
        prependData:
          "@import '@/tccomponents/_variables.scss';\n@import '@/tccomponents/_mixins.scss';"
      }
    }
  }
};
