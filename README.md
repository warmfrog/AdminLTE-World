# star-client

基于 Vue.js 的 Star 收藏系统开发, 项目需要 nodejs 环境，基于 AdminLTE 后端模版。

只开发了一部分，包括页面和后台，截图如下

![主页][0]

![管理后台][1]

![后台列表][2]

## 在 Docker 中运行

`docker run -d -p 8080:8080 warmfrog/star-client:0.0.1`

## 在 Node 中运行
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker

1. 构建 docker 镜像

`docker build -t warmfrog/star-client:0.0.1 .`

2. 在 docker 中运行

`docker run -d -p 8080:8080 warmfrog/star-client:0.0.1`

[0]: docs/index.jpg
[1]: docs/admin.jpg
[2]: docs/list.jpg