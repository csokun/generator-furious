module.exports = (fastify, opts, next) => {
  fastify
    .get('/healthz', healthzHandler);

  next();
}

/**
 * ========================================
 * H A N D L E R S
 * ========================================
 */

async function healthzHandler(req, reply) {
  reply.code(200).send({ message: 'alive!' });
}