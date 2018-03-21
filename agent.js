'use strict';

const amqp = require('./lib/amqp');

module.exports = agent => {
  if (agent.config.nafAmqp.agent) amqp(agent);
};
