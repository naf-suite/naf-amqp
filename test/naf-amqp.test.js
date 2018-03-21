'use strict';

const mock = require('egg-mock');

describe('test/naf-amqp.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/naf-amqp-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, nafAmqp')
      .expect(200);
  });
});
