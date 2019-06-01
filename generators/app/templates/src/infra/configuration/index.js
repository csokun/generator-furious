const nconf = require('nconf');
const path = require('path');

const Environment = require('./environment');

module.exports = () => {
  const env = Environment.createEnv();
  const { alias: envAlias } = env;
  const envVarsAppPrefix = 'app__';
  const rootPath = path.join(__dirname, '..', '..');

  // Merge all configs, based on preceedence
  nconf
    .env({
      separator: '__', // env vars should look like this: app__web__port=8080
      lowerCase: false, // avoid variable re-name (e.g. routePrefix to routeprefix)
      parseValues: true,
      transform: (item) => {
        if ((item.key || '').startsWith(envVarsAppPrefix)) {
          return {
            ...item,
            key: item.key.replace(envVarsAppPrefix, ''),
          };
        }
        return null;
      },
    })
    .file('secret', path.join(rootPath, 'config/secret.json'))
    .file('env-specific', path.join(rootPath, `config/config.${envAlias}.json`))
    .file('common', path.join(rootPath, 'config/config.json'));

  return {
    ...nconf.get(),
    env,
  };
};
