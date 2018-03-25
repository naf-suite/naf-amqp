'use strict';

const assert = require('assert');

module.exports = class AmqpWrapper {
  constructor(app, conn) {
    this.app = app;
    this.conn = conn || app.amqp.conn;
  }

  async exchange(exchange, type, routingKey, content, options = { durable: false }) {
    assert(exchange, 'exchange is undefined or null');
    // assert(routingKey, 'routingKey is undefined or null');
    assert(content, 'content is undefined or null');
    try {
      const ch = await this.conn.createChannel();
      await ch.assertExchange(exchange, type, options);
      if (!Buffer.isBuffer(content)) content = new Buffer(content);
      await ch.publish(exchange, routingKey, content, options);
      await ch.close();
    } catch (err) {
      this.app.coreLogger.error(`[egg-naf-amqp] publish to topic fail: ${err.toString()}`);
      throw new Error('publish to topic fail!');
    }
  }

  async topic(exchange, routingKey, content, options = { durable: false }) {
    await exchange(exchange, 'topic', routingKey, content, options);
  }

  async fanout(exchange, routingKey, content, options = { durable: false }) {
    await exchange(exchange, 'fanout', routingKey, content, options);
  }

  async queue(name, content, options = { durable: false }) {
    assert(name, 'name is undefined or null');
    assert(content, 'content is undefined or null');
    try {
      const ch = await this.conn.createChannel();
      await ch.assertExchange(name, options);
      if (!Buffer.isBuffer(content)) content = new Buffer(content);
      await ch.sendToQueue(name, content, options);
      await ch.close();
    } catch (err) {
      this.app.coreLogger.error(`[egg-naf-amqp] publish to queue fail: ${err.toString()}`);
      throw new Error('publish to queue fail!');
    }
  }
};
