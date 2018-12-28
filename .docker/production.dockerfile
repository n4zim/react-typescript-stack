LABEL maintainer "Nazim Lachter <nlachter@gmail.com>"

# ---- BUILD ----
FROM node:alpine AS build

## System dependencies
RUN apk add --no-cache --update make gcc g++ libc-dev libpng-dev automake autoconf libtool nasm

## App directory
WORKDIR /usr/app

## Node dependencies
COPY package*.json ./
RUN yarn install --only=production

## App files
COPY . .

## Webpack build 
RUN yarn build


# ---- SERVER ----
FROM node:alpine

## App directory
WORKDIR /usr/app

## Copying build files
COPY --from=build /usr/app/ ./build

## Starting the app
EXPOSE 80
CMD [ "yarn", "serve" ]
