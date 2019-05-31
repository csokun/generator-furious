const Fastify = require('fastify');
const ffcors = require('fastify-cors');
const ffboom = require('fastify-boom');
const ffhelmet = require('fastify-helmet');

const ErrorHandler = require('./common/ErrorHandler');
const { genReqId } = require('./common/Correlation');

function createServer(appConfig, logger) {
  const {
    cors
  } = appConfig;

  const fastify = Fastify({ logger, genReqId });

  fastify.register(ffhelmet);
  fastify.register(ffcors, cors);
  fastify.register(ffboom);

  fastify.setErrorHandler(ErrorHandler);
  
  fastify.setNotFoundHandler((request, reply) => {
    reply.code(404).send({ message: 'Not Found' });
  });

  fastify.ready((err) => {
    if (err) {
      logger.error(err);
      process.exit(1);
    }
  });

  return fastify;
}

module.exports = { createServer };
