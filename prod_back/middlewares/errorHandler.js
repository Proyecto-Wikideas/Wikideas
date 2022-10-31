"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _logger = _interopRequireDefault(require("../utils/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = (error, request, response, next) => {
  _logger.default.error(error.message);
  next(error);
};
exports.default = _default;