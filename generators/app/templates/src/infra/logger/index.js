const pino = require('pino');

const logger = ({
  enabled = true,
  level = 'silent',
  prettyPrint = false,
  redact = [],
}) => {
  const options = {
    enabled: false,
    prettyPrint: false,
    useLevelLabels: true,
    redact: [
      'req.headers.authorization',
      'req.headers.cookie',
      'req.headers["x-token"]',
      'req.headers["x-api-key"]',
      ...redact
    ],
    level: 'info',
    serializers: {
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
      req(req) {
        return {
          method: req.method,
          url: req.url,
          headers: req.headers,
          hostname: req.hostname,
          remoteAddress: req.ip,
          remotePort: req.connection.remotePort,
        };
      },
    },
  };

  return pino({
    ...options,
    ...{
      enabled,
      level,
      prettyPrint,
    },
  });
};

module.exports = logger;
