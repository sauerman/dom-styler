'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toCamelCase = require('to-camel-case');

var _toCamelCase2 = _interopRequireDefault(_toCamelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var transforms = {
  'float': 'cssFloat'
};

function transformProperty(property) {
  var result = (0, _toCamelCase2.default)(property);
  result = transforms[result] || result;
  return result;
}

function one(element, name, value) {
  var property = transformProperty(name);
  var rollback = element.style[property];

  element.style[property] = value;
  return rollback;
}

function all(element, css) {
  var rollback = {};

  Object.keys(css).forEach(function (key) {
    rollback[key] = one(element, key, css[key]);
  });

  return rollback;
}

/**
 * examples:
 * style(body, 'background', 'maroon')
 * style(body, {background: 'maroon', color: 'white'})
 */
function style(element) {
  if (arguments.length === 3) {
    var rollback = one(element, arguments[1], arguments[2]);
    return _defineProperty({}, arguments[1], rollback);
  }

  return all(element, arguments[1]);
}

exports.default = style;