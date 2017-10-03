'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _passportFacebook = require('passport-facebook');

var _passportFacebook2 = _interopRequireDefault(_passportFacebook);

var _keys = require('../helpers/keys');

var _keys2 = _interopRequireDefault(_keys);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacebookStrategy = _passportFacebook2.default.Strategy;
_passport2.default.use(new FacebookStrategy({
    clientID: _keys2.default.ID,
    clientSecret: _keys2.default.SecretKey,
    callbackURL: _keys2.default.URL,
    profileFields: ['id', 'displayName', 'photos', 'email'],
    enableProof: true
}, function (accessToken, refreshToken, profile, callback) {
    _user2.default.findOne({ provider_id: profile.id }).then(function (person) {
        if (person) callback({ status: 201, message: person.token });else new _user2.default({
            provider_id: profile.id,
            provider: profile.provider,
            name: profile.displayName,
            email: profile.email

        }).save(function (err, users) {
            if (err) callback({ status: 500 });else {
                callback({ status: 201, message: users });
            };
        });
    });
}));
//# sourceMappingURL=passport_config.js.map