module.exports = (api, options) => {
  api.extendPackage({
    scripts: {
      fontmin: 'vue-cli-service fontmin'
    }
  })
}
