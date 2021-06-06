const Configuration = require('~infra/configuration');
const { createServer } = require('~infra/fastify');
const Logger = require('~infra/logger');

const app = require('./app');

const start = async () => {
  const appConfig = Configuration();
  const { port, host, prefix } = appConfig.web;
  delete appConfig.web;

  const logger = Logger(appConfig.logger);
  const fastify = createServer(appConfig, logger);
  
  fastify.register(app, { appConfig, prefix })

  fastify.listen(port, host);
}

start();
