"use strict";

var _http = _interopRequireDefault(require("http"));
var _logger = _interopRequireDefault(require("./utils/logger"));
var _config = _interopRequireDefault(require("./utils/config"));
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// CREATE SERVER AND INIT SERVER IN A PORT 
const server = _http.default.createServer(_app.default);
server.listen(_config.default.PORT, () => {
  _logger.default.info(`Server running on port ${_config.default.PORT}`);
});