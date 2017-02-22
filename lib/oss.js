'use strict';

const assert = require('assert');
// const OSS = require('ali-oss');
const Ess = require('ess');

// const RE_HTTP_PROTOCOL = /^https?:\/\//;
function checkBucketConfig(config) {
  assert(config.bucket,
    '[egg-oss] Must set `bucket` in ess\'s config');
  assert(config.ess_public_key && config.ess_private_key,
    '[egg-oss] Must set `ess_public_key` and `ess_private_key` in ess\'s config');

  // if (config.endpoint && RE_HTTP_PROTOCOL.test(config.endpoint)) {
  //   config.endpoint = config.endpoint.replace(RE_HTTP_PROTOCOL, '');
  // }
}

module.exports = app => {
  app.addSingleton('ess', (config, app) => {
    config = Object.assign({}, config, { urllib: app.urllib });
    // if (config.cluster) {
    //   config.cluster.forEach(checkBucketConfig);
    //   return new OSS.ClusterClient(config);
    // }

    checkBucketConfig(config);
    return new Ess.EssClient(config);
  });
  // app.createOss = app.oss.createInstance.bind(app.oss);
};
