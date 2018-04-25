import * as AmqpLib from 'amqplib';

declare namespace Naf {
  /**
   * extend egg Context interface
   */
  export interface Amqp {
    /**
     * amqp connection object
     */
    conn: AmqpLib.Connection;

    /**
     * amqp wrapper interface
     */
    mq: Naf.AmqpWrapper;
  }

  export interface AmqpWrapper {
    /**
     * publish to exchage
     * @param exchange exchange name
     * @param type exchange type: fanout、topic
     * @param routingKey key value
     * @param content message content
     * @param options options for exchange,default value { durable: false }
     */
    exchage(exchange: string, type: string, routingKey: string, content: string, options: object);

    /**
     * publish to topic exchange
     * @param exchange exchange name
     * @param routingKey key value
     * @param content message content
     * @param options options for exchange,default value { durable: false }
     */
    topic(exchange: string, routingKey: string, content: string, options: object);

    /**
     * publish to fanout exchage
     * @param exchange exchange name
     * @param routingKey key value
     * @param content message content
     * @param options options for exchange,default value { durable: false }
     */
    fanout(exchange: string, routingKey: string, content: string, options: object);

    /**
     * publish to queue
     * @param name queue name
     * @param content message content
     * @param options options for queue,default value { durable: false }
     */
    queue(name: string, content: string, options: object);
  }
}

declare module 'egg' {
  /**
   * extend egg Context interface
   */
  export interface Context {

    amqp: Naf.Amqp;

    mq: Naf.AmqpWrapper;
  }
}

