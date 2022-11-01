"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = (req, res) => {
  res.status(404).send({
    error: 'unknown endpoint'
  });
};
exports.default = _default;