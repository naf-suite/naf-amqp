# egg-naf-amqp

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-naf-amqp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-naf-amqp
[travis-image]: https://img.shields.io/travis/eggjs/egg-naf-amqp.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-naf-amqp
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-naf-amqp.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-naf-amqp?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-naf-amqp.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-naf-amqp
[snyk-image]: https://snyk.io/test/npm/egg-naf-amqp/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-naf-amqp
[download-image]: https://img.shields.io/npm/dm/egg-naf-amqp.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-naf-amqp

<!--
Description here.
-->

## Install

```bash
$ npm i egg-naf-amqp --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.amqp = {
  enable: true,
  package: 'egg-naf-amqp',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.amqp = {
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
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
