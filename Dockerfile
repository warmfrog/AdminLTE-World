FROM node:current-slim

WORKDIR /usr/src/app

COPY package.json .

RUN npm i --registry=https://registry.npm.taobao.org

COPY . .

EXPOSE 8080

CMD npm run serve

