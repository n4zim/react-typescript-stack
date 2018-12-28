LABEL maintainer "Nazim Lachter <nlachter@gmail.com>"

# Using latest Node version with Alpine as OS
FROM node:alpine

# System dependencies
RUN apk add --no-cache --update make gcc g++ libc-dev libpng-dev automake autoconf libtool nasm

# App directory
WORKDIR /usr/app

# Node dependencies
RUN yarn install

# Starting the app
EXPOSE 80
CMD [ "yarn", "start" ]
