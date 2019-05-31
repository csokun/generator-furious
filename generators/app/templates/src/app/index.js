const healthz = require('./healthz');

module.exports = (fastity, opts, next) => {
  fastity.register(healthz, opts);
  next();
}
