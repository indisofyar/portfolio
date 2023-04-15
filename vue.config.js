const path = require('path');
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [
            path.resolve(__dirname, 'src/core/')
          ],
          indentedSyntax: true,
        },
        additionalData: '@import "~@/assets/scss/_global.scss"',
      },
    },
  },
  assetsDir: '@/assets/',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio-2023/'
    : '/'
})
