module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData:
          "@import '@/components/_variables.scss';\n@import '@/components/_mixins.scss';"
      }
    }
  }
};
