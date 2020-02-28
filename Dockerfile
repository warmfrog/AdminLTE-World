# 引用镜像
ARG NODE_VERSION=current-slim
FROM node:${NODE_VERSION}

LABEL name="Star" \
      version="0.0.1" \
      author="warmfrog" \
      maintainer="crawlstar@126.com" \
      git="https://github.com/warmfrog/admin-lte-world.git" \
      description="基于 Vue.js 的 Star 收藏系统应用前端页面" \
      tags="Vue.js, nodejs, AdminLTE, Bootstrap, axios" \
      updateDate="2020-02-28"

ENV PORT=8080
ENV WORK_DIR=/usr/src/app
# 设置工作目录根目录
WORKDIR ${WORK_DIR:-/usr/src/app}
# 复制 package.json 到工作目录
COPY package.json .
# 运行命令，设置 npm 注册仓库为 taobao 仓库
RUN npm i
# 复制当前目录文件到工作目录
COPY . .
# 暴露 Vue.js 应用 8080 端口
EXPOSE ${PORT:-8080}
# 运行命令
CMD npm run serve

