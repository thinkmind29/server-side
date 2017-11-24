'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = Schema({

    provider_id: { type: String, trim: true },
    provider: { type: String, trim: true },
    name: { type: String, trim: true, lowercase: true },
    age: { type: Number, trim: true },
    gender: { type: String, trim: true, lowercase: true },
    password: { type: String, trim: true },
    email: { type: String, trim: true, lowercase: true },

    hability: { type: String, trim: true, lowercase: true },
    biography: { type: String, trim: true, lowercase: true },
    photo: { type: String, trim: true },
    cover: { type: String, trim: true },

    instagram: { type: String, trim: true },
    youtube: { type: String, trim: true },
    twitter: { type: String, trim: true },
    soundCloud: { type: String, trim: true },
    facebook: { type: String, trim: true },

    city: { type: String, trim: true, lowercase: true },
    state: { type: String, trim: true, lowercase: true },
    nation: { type: String, trim: true, lowercase: true },
    tags: [{ type: String, lowercase: true }],
    token: { type: String },
    created_at: { type: Date, default: Date.valueOf() }
});

//documentar estrutura de dados
exports.default = _mongoose2.default.model('User', UserSchema);
//# sourceMappingURL=user.js.map
