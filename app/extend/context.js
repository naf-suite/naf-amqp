'use strict';

// this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
module.exports = {
  get mq() {
    return this.app.amqp && this.app.amqp.conn;
  },

};
