import "core-js/modules/es.array.includes";
import "core-js/modules/es.array.map";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import "core-js/modules/web.timers";
import "regenerator-runtime/runtime";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import biz1 from './biz1';
var a = [10, 11, 12];
var arr = a.map(function (n) {
  return n + 1;
});
console.log('ARR=' + arr);
console.log('includes=' + a.includes(10));
console.log('sum-foreach=' + biz1.clac());

function f() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  console.log('...ARGS=' + args);
}

function f1() {
  var ms1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var ms2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  return new Promise(function (resolve, reject) {
    window.setTimeout(function () {
      resolve('down');
    }, ms1);
    window.setTimeout(function () {
      reject('fail');
    }, ms2);
  });
}

function f2() {
  return _f.apply(this, arguments);
}

function _f() {
  _f = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var resource;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return f1();

          case 2:
            resource = _context.sent;
            return _context.abrupt("return", resource);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _f.apply(this, arguments);
}

f(a, 5, 6);
f1(3000).then(function (data) {
  console.log('f1-finish=' + data);
}).catch(function (data) {
  console.log('f1-finish=' + data);
});
f2(1000).then(function (data) {
  console.log('f2-finish=' + data);
});
