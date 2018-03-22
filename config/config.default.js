'use strict';

/**
 * egg-naf-amqp default config
 * @member Config#amqp
 * @property {Boolean} app - app enable
 * @property {Boolean} agent - agent enable
 * @property {Object} clent - amqp connection config
 * @property {String} protocol - amqp or amqps
 * @property {String} hostname - the host of amqp server
 * @property {Number} port - the listening port of amqp server
 * @property {String} username - the login username of amqp server
 * @property {String} password - the login password of amqp server
 * @property {String} vhost - the virtual host of amqp server
 */
exports.amqp = {
  default: {
    protocol: 'amqp',
    hostname: 'localhost',
    port: 5672,
    username: 'guest',
    password: 'guest',
    vhost: '/',
  },
  app: true,
  agent: false,

  // Single amqp
  // client: {
  //   protocol: 'amqp',
  //   hostname: 'localhost',
  //   port: 5672,
  //   username: 'guest',
  //   password: 'guest',
  //   vhost: '/',
  // },

  // Multi amqp
  // clients: {
  //   instance1: {
  //     protocol: 'amqp',
  //     hostname: 'localhost',
  //     port: 5672,
  //     username: 'guest',
  //     password: 'guest',
  //     vhost: '/',
  //   },
  //   instance2: {
  //     protocol: 'amqp',
  //     hostname: 'localhost',
  //     port: 5672,
  //     username: 'guest',
  //     password: 'guest',
  //     vhost: '/',
  //   },
  // },
};
