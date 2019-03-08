// 此配置为vue-cli的全局配置 参考文档 https://cli.vuejs.org/config/#global-cli-config

// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/';

module.exports = {
  /**
   *  @description 根路径
   */
  publicPath: BASE_URL,
  // 默认为'dist' 运行时将生成生成构建文件的目录vue-cli-service build
  outputDir: 'dist',
};
