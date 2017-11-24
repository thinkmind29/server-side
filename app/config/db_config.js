'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _helper = require('../helpers/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = "mongodb://musically:12345678@ds243055.mlab.com:43055/musically";
// const url = "mongodb://localhost:27017/thinkdb";
_mongoose2.default.Promise = global.Promise;

_mongoose2.default.connect(url, function (err, res) {
    if (err) {
        console.log('Não foi possível conectar');
    } else {
        console.log('Conetado ao banco de dados');
    }
});
//# sourceMappingURL=db_config.js.map