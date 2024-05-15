const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://heimahr.itheima.net/'
      },
      '/ddl': {
        target: 'http://10.165.217.10:8000/'
      }
    }
  }
})
