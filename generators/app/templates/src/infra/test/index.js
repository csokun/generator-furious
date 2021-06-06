const Configuration = require('~infra/configuration');
const { createServer } = require('~infra/fastify');
const Logger = require('~infra/logger');

const createTestServer = ({ plugins = [] }) => {
  const appConfig = Configuration();
  const logger = Logger(appConfig.logger);

  const server = createServer({ appConfig, logger });
  plugins.map(plugin => {
    server.register(plugin);
  });

  return server;
}

module.exports = { createTestServer };
