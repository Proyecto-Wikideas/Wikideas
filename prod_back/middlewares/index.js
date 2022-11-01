"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _errorHandler = _interopRequireDefault(require("./errorHandler"));
var _unknownEndpoint = _interopRequireDefault(require("./unknownEndpoint"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  errorHandler: _errorHandler.default,
  unknownEndpoint: _unknownEndpoint.default
};
exports.default = _default;