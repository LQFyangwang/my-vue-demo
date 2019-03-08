# my-vue-product

## 第一个Vue示例项目

##### Vue全家桶介绍
[vue-cli](https://cli.vuejs.org/zh/config/#baseurl) ——Vue项目构建工具

[vue-router](https://router.vuejs.org/) ——Vue.js的官方路由器

[vuex](https://vuex.vuejs.org/) ——Vue.js应用程序的状态管理模式+库

[Axios](https://www.kancloud.cn/yunye/axios/234845) ——axios是一个http请求包，vue官网推荐使用它进行http调用


概括起来就是：、1.项目构建工具、2.路由、3.状态管理、4.http请求工具。

## 1、开发环境安装
```
  1.1 mac:
     安装 NodeJS
     	brew install node
     	echo 'export PATH="/usr/local/Cellar/node/11.6.0/bin:$PATH"' >> ~/.bash_profile
     	source ~/.bash_profile
     升级 npm
     	npm install npm -g
     安装或升级 vue cli
     	npm install @vue/cli -g
     创建项目失败
     	npm cache clean --force 后再试
  1.2 window环境
     。。。
```

## 2、新建项目下各个包所代表的意思
```
 my-vue-product
      build                     ——项目配置文件夹
          build.js                 ——项目环境配置代码
          check-version.js         ——检查node-npm版本的插件
          logo.png                 ——vue的logo图片
          utils.js                 ——项目配置变量
          vue-loader.conf.js       ——在.vue文件中用于处理css的规则
          webpack.base.conf.js     ——webpack基础配置    
          webpack.dev.conf.js      ——webpack开发环境配置（包括测试服务器环境）
          webpack.prod.conf.js     ——webpack生产环境配置（打包时的配置代码）
          
      config                    ——环境变量的配置
          dev.env.js               ——开发环境变量配置
          index.js                 ——webpack相关变量配置（开发环境接口代理在这里配置）
          prod.env.js              ——发布环境变量配置
          
      node_modules              ——当前工程下载的第三方模块插件包（npm下载和管理的模块所在的位置）
      
      src                       ——源码目录
          assets                   ——静态资源文件（会被webpack构建并打包的）
              logo.png                ——logo图片属于静态资源
          components               ——vue公共组件
              HelloWorld.vue          ——一个组件文件(.vue)
          router                   ——路由配置
              index.js                ——具体路由代码
          views                    ——存放页面，按模块分目录 （自己定义的目录）
          App.vue                  ——vue的页面入口，打开的页面就是这个文件
          main.js                  ——webpack打包的入口文件，加载各种组件、配置、变量
          
      static                    ——纯静态资源文件夹，不会被webpack打包
      
      test                      ——测试目录
      
      .babelrc                  ——es6语法编译配置
      .editorconfig             ——定义代码格式
      .eslintignore             ——配置你不想被 vue-eslint检验的文件
      .eslintrc.js              ——定义代码格式规范
      .gitignore                ——git上传时需要忽略的文件的列表
      .postcssrc.js             ——postcss-loader模块配置文件，用于加载css
      index.html                ——项目真正的入口（app.vue需要嵌入在html里）
      package.json              ——项目基本信息(包括一些指令等)
      package-lock.json         ——项目依赖包版本，锁定文件  (如果没有则利用npm install命令生成一份)

```

## 3、操作命令

安装项目依赖
```
npm install
```
开发调试
```
npm run serve
或者
npm run dev
```
发布编译
```
npm run build
```
运行测试
```
npm run test
```
代码质量检查及修复
```
npm run lint
```
更多自定义配置
```
参考 Vue Cli 3 文档
```
查看 [Configuration Reference](https://cli.vuejs.org/config/).

## 4、注意
package.json 和 package-lock.json
```
package.json 和 package-lock.json 两个文件不可以直接修改，包依赖安装和参数修改都通过命令完成。
```
eslint配置
查看 [eslint文档](https://eslint.org/docs/user-guide/getting-started)，代码检查更多规则查看[EsLint规则说明](https://eslint.org/docs/rules/)
