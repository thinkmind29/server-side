'use strict';

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.normalizePort = function (val) {

    var port = parseInt(val);

    if (isNaN(port)) return val;
    if (port >= 0) return port;

    return false;
};

exports.token = function (param1, param2, param3) {
    return _jsonwebtoken2.default.sign({ 'param1': param1, 'param2': param2, 'param3': param3 }, 'secret-love-song');
};

exports.encryptPassword = function (password) {
    return _bcryptNodejs2.default.hashSync(password, _bcryptNodejs2.default.genSaltSync(9));
};
exports.decryptPassword = function (password, hash) {
    return _bcryptNodejs2.default.compareSync(password, hash);
};

exports.message = function (message) {

    console.log(message);
};
//# sourceMappingURL=helper.js.map