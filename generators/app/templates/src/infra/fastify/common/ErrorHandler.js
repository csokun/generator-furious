function ErrorHandler(error, request, reply) {
  const { correlationId } = request.req;
  request.log.error(error);
  if (error.statusCode) {
    reply.code(error.statusCode).send({ 
      message: error.message
    });
  } else {
    reply.code(500).send({
      code: 'InternalError',
      message: 'Internal Server Error',
      correlationId,
    });
  }
}

module.exports = ErrorHandler;