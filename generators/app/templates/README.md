# Fastify-Furious Edition

This project is generated using `generator-furious`.

# Features

 - fastify
 - nconf
 
# Usage

```bash
cd src
npm install
npm run start:local
```

# Docker

```bash
docker build -t app .
docker run -it --rm \
  - p 8080:8080     \
  app:latest
```