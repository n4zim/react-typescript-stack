# React Quick Start Stack

## Prerequisites
- [Docker](https://docs.docker.com/install/)
- [docker-compose](https://github.com/docker/compose/releases)

## Commands

### Docker

#### Run development (with hot reload)
```bash
docker-compose up -d
```

#### Create a production image
```bash
docker-compose build
```

#### Run production (once the image is built)
```bash
docker run -d 
```

### Local

#### Development

##### With npm
```bash
npm install
npm start
```

##### With yarn
```bash
yarn install
yarn start
```

---

## Production

### Local

#### With npm
```bash
npm install
npm build
npm serve
```

#### With yarn
```bash
yarn install
yarn build
yarn serve
```
