FROM node:latest AS build-stage
ENV WORK_DIR=/app
WORKDIR ${WORK_DIR}
COPY . .
RUN npm i --registry https://registry.npm.taobao.org && npm run build 

FROM nginx as production-stage
LABEL name="Star" \
      version="0.0.1" \
      author="warmfrog" \
      maintainer="crawlstar@126.com" \
      git="https://github.com/warmfrog/admin-lte-world.git" \
      description="基于 Vue.js 的 Star 收藏系统应用前端页面" \
      tags="Vue.js, nodejs, AdminLTE, Bootstrap, axios" \
      updateDate="2020-02-28"
RUN mkdir /app
ENV PORT=8080
EXPOSE ${PORT}
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

