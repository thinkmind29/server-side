'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = Schema({

    name: {

        type: String,
        required: [true, "Insert name"],
        trim: true,
        lowercase: true
    },

    provider: String,

    provider_id: String,

    photo: String,

    email: {
        type: String,
        required: [true, "Insert email"],
        unique: true,
        trim: true,
        lowercase: true
    },

    password: {
        type: String,
        required: [true, "Insert password"],
        trim: true
    },

    hability: {
        type: String,
        required: [true, "Insert hability"],
        lowercase: true
    },

    biography: {
        type: String,
        //required: [true, "Insert biography"],
        lowercase: true
    },
    token: {
        type: String,
        required: [true, "Não foi inserido o token"]
    },
    create_at: {
        type: Date,
        default: Date.now
    }

});

exports.default = _mongoose2.default.model('User', UserSchema);
//# sourceMappingURL=user.js.map