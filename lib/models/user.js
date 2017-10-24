'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = Schema({

    name: { type: String, required: true, trim: true, lowercase: true },
    age: { type: Number, required: true },
    gender: { type: String, trim: true, lowercase: true },
    password: { type: String, trim: true },
    email: { type: String, trim: true, required: true },
    hability: { type: String },
    biography: { type: String },
    photo: { type: String },
    social: {
        instagram: { type: String },
        youtube: { type: String },
        twitter: { type: String },
        soundCloud: { type: String },
        facebook: { type: String }
    },
    address: {},

    tags: [{ type: String }],
    token: { type: String },
    created_at: { type: Date, default: Date.now() }
});

exports.default = _mongoose2.default.model('User', UserSchema);
//# sourceMappingURL=user.js.map