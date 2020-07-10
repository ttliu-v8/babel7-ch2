import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
var a = [10, 11, 12];

var arr = _mapInstanceProperty(a).call(a, function (n) {
  return n + 1;
});

console.log('ARR=' + arr);
console.log('includes=' + _includesInstanceProperty(a).call(a, 10));

function f() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  console.log('...ARGS=' + args);
}

function f1() {
  var ms1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var ms2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  return new _Promise(function (resolve, reject) {
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
  _f = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var resource;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
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
