'use strict';

let getData = (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      var data = yield axios.get('http://127.0.0.1/phptest/sql.php'); //http://127.0.0.1/phptest/sql.php
    } catch (err) {
      console.log(err);
    }
    res.send(data);
  });

  return function getData(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var express = require('express');
var axios = require('axios');

var app = express();

app.get('/', getData);

app.listen(3000, () => {
  console.log('listening');
});
