'use strict';

const oss = require('./lib/oss');

module.exports = agent => {
  const useAgent = agent.config.ess.useAgent;
  if (useAgent) {
    oss(agent);
  }
};
