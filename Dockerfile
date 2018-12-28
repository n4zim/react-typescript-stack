LABEL maintainer "Nazim Lachter <nlachter@gmail.com>"

# Using latest Node version with Alpine as OS
FROM node:alpine

# System dependencies
RUN apk add --no-cache --update make gcc g++ libc-dev libpng-dev automake autoconf libtool nasm

# App directory
WORKDIR /usr/src/app

# Node dependencies
COPY package*.json ./
RUN yarn install --only=production

# App files
COPY . .

# Webpack build 
RUN yarn build

# Starting the app
EXPOSE 80
CMD [ "yarn", "serve" ]
