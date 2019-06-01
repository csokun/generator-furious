const createEnv = () => {
  const name = (process.env.NODE_ENV || 'development').toLowerCase();

  switch (name) {
    case 'development':
      // staging server
      return {
        name,
        alias: 'dev',
        [name]: true,
      };

    case 'production':
      // live
      return {
        name,
        alias: 'prod',
        [name]: true,
      };

    case 'test':
      // build environment
      return {
        name,
        alias: 'test',
        [name]: true,
      };

    default:
      // developer machine configuration
      return {
        name: 'local',
        alias: 'local',
        local: true,
      };
  }
};

module.exports = { createEnv };
