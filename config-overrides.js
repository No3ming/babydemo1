const rewirePreact = require('react-app-rewire-preact');
const rewireLess = require('react-app-rewire-less');
const {injectBabelPlugin} = require('react-app-rewired');
const rewireMobX = require('react-app-rewire-mobx');

module.exports = function override(config, env) {
  // add a plugin
  // config = injectBabelPlugin('emotion/babel', config);
  // 主题定制
  config = rewireLess(config, env);
  // use the Preact rewire
  if (env === "production") {
    console.log("⚡ Production build with Preact");
    config = rewirePreact(config, env);
  }

  // use the MobX rewire
  config = rewireMobX(config,env);
  return config;
}
