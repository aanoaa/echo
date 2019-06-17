FROM node:10-alpine
MAINTAINER Hyungsuk Hong <aanoaa@gmail.com>

RUN apk update && apk add --no-cache yarn

COPY ./package.json ./yarn.lock /app/
WORKDIR /app
RUN yarn

# deps modules are up to cached.
COPY . /app

CMD ["yarn", "start"]

EXPOSE 3000
