'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _endereco;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Schema = _mongoose2.default.Schema;

var FaceUserSchema = Schema({

    name: {
        type: String,
        required: [true, "Insert name"],
        trim: true,
        lowercase: true
    },

    provider: String,

    facebookId: String,

    hability: {
        type: String,
        lowercase: true
    },

    biography: {
        type: String,
        lowercase: true
    },

    social: {
        instagran: String,
        youtube: String,
        soundCloud: String,
        twitter: String
    },

    endereco: (_endereco = {

        rua: String,
        numero: String,
        bairro: String,
        cep: String
    }, _defineProperty(_endereco, 'bairro', String), _defineProperty(_endereco, 'cidade', String), _defineProperty(_endereco, 'estado', String), _defineProperty(_endereco, 'pais', String), _endereco),

    create_at: {
        type: Date,
        default: Date.now()
    }

});

exports.default = _mongoose2.default.model('UserFace', FaceUserSchema);
//# sourceMappingURL=facebookUser.js.map