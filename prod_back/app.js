"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _index = _interopRequireDefault(require("./middlewares/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();

// MIDLEWARES OF CONFIGURATION 
app.use((0, _cors.default)());
app.use((0, _morgan.default)("dev"));
app.use(_express.default.json());

// ROUTES 
app.get('/', (req, resp) => {
  resp.send('API DE BIENVENIDA');
});

// MIDLEWARES IN CASE OF ERROR 
app.use(_index.default.unknownEndpoint);
app.use(_index.default.errorHandler);
var _default = app;
exports.default = _default;