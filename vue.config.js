module.exports = {
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
