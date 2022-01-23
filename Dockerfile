# syntax=docker/dockerfile:1

FROM node:lts-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
COPY ["client/package.json", "client/package-lock.json*", "./client/"]
COPY ["server/package.json", "server/package-lock.json*", "./server/"]

RUN npm run install-client --only=production
RUN npm run install-server --only=production


COPY . .

RUN npm run build --prefix client

USER node

CMD [ "npm", "start", "--prefix", "server" ]