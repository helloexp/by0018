module.exports = {
  devServer: {
    // 环境配置
    host: "localhost",
    port: 8080,
    https: false,
    hotOnly: false,
    open: true, //配置自动启动浏览器
    proxy: {
      // 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
      "/api": {
        target: "http://192.168.1.254:5000/",
        // target: "http://116.62.151.17:88",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/foo": {
        target: "<other_url>"
      }
    }
  }
};
