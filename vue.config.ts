const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    publicPath:"./", //部署时url的相对路径，默认为"/"
    // outputDir:"dist", //打包之后生成的文件目录名称，默认为：‘dist'
    // assetsDir:'',//build之后静态资源css,js,img,fonts 的目录
    // indexPath:'index.html',//指定生成的index.html的输出路径，也可以是一个绝对路径
    // filenameHashing: true,//build之后生成的静态文件名hash，默认是true,
    productionSourceMap:true,
    // pages:{
    //在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象，对象的 key 是入口的名字，value 是
    //一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；
    // 或一个指定其 entry 的字符串
    //     index:{
            // entry:
    //     }
    // },
    // 配置路径别名
    chainWebpack: config => {
        config.resolve.alias
        .set('@', resolve('src'))
    },
    //
   // lintOnSave:"",//是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
   devServer: {
       proxy:"http://localhost:3000"//前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器,devServer.proxy 可以是一个指向开发环境 API 服务器的字符串
   },
   //第三方插件选项
   pluginOptions:{

   }
}