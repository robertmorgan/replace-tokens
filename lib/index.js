'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (text) {
  var replacements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$openingToken = _ref.openingToken,
      openingToken = _ref$openingToken === undefined ? '{' : _ref$openingToken,
      _ref$closingToken = _ref.closingToken,
      closingToken = _ref$closingToken === undefined ? '}' : _ref$closingToken;

  var keys = Object.keys(replacements);
  var regexSafePattern = /[-\/\\^$*+?.()|[\]{}]/g;
  return keys.reduce(function (accumulator, currentKey) {
    var regexSafeToken = ('' + openingToken + currentKey + closingToken).replace(regexSafePattern, '\\$&');
    return accumulator.replace(new RegExp(regexSafeToken, 'g'), replacements[currentKey]);
  }, text);
};