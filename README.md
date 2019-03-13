# minidemo

> 本项目是为了学习以及了解微信小程序，本次实现的功能点主要有，微信小程序个api的学习，以及前端路由的拦截和请求的拦截寻求微信小程序的合理开发姿势， 当然也是为了能够找个工作（收留的地方），Fighting

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 相关  API文档
小程序API: 
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
