'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use((() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    const start = Date.now();
    yield next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

// logger

app.use((() => {
  var _ref2 = _asyncToGenerator(function* (ctx, next) {
    const start = Date.now();
    yield next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})());

// response

app.use((() => {
  var _ref3 = _asyncToGenerator(function* (ctx) {
    ctx.body = 'Hello World';
  });

  return function (_x5) {
    return _ref3.apply(this, arguments);
  };
})());

app.listen(3000);
