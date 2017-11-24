'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var MsgSchema = Schema({

    remetente_id: { type: String },
    destinatario_id: { type: String },
    mensagem: { type: String },
    data: { type: Date, default: Date.valueOf() }
});

exports.default = _mongoose2.default.model('Message', MsgSchema);
//# sourceMappingURL=message.js.map