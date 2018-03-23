'use strict';

const assert = require('assert');
const amqp = require('amqplib');
const wrapper = require('./wrapper');

module.exports = app => {
  app.addSingleton('amqp', createClient);
};

let count = 0;


/**
 * @param  {Object} config   框架处理之后的配置项
 * @param  {Application} app 当前的应用
 * @return {Object}          返回创建的 amqp 实例
 */
function createClient(config, app) {
  assert(config.hostname && config.port && config.username && config.password !== undefined && config.vhost !== undefined,
    `[egg-naf-amqp] 'host: ${config.hostname}', 'port: ${config.port}', 'username: ${config.username}', 'password: ${config.password}', 'vhost: ${config.vhost}' are required on config`);

  app.coreLogger.info('[egg-naf-amqp] connecting amqp://%s:%s@%s:%s/%s',
    config.username, config.password, config.hostname, config.port, config.vhost);

  const client = { config, conn: false };

  app.beforeStart(async () => {
    const index = count++;
    try {
      client.index = index;
      client.conn = await amqp.connect(config, config.opts);
      client.mq = new wrapper(app, client.conn);
      app.coreLogger.info(`[egg-naf-amqp] instance[${index}] status OK!`);
    } catch (err) {
      app.coreLogger.error(`[egg-naf-amqp] instance[${index}] fail, ${err.toString()}`);
    }
  });

  app.beforeClose(async () => {
    const index = client.index;
    try {
      if (client.conn) {
        await amqp.close();
        client.conn = false;
        app.coreLogger.info(`[egg-naf-amqp] instance[${index}] close OK!`);
      }
    } catch (err) {
      app.coreLogger.error(`[egg-naf-amqp] instance[${index}] close fail, ${err.toString()}`);
    }
  });

  return client;
}
