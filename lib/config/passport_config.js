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
    enableProof: true
}, function (accessToken, refreshToken, profile, done) {
    _user2.default.findOne({ provider_id: profile.id }, function (err, user) {
        if (err) {
            throw err;
        }
        if (!err && user != null) {
            return done(null, user);
        } else {

            new _user2.default({
                provider_id: profile.id,
                provider: profile.provider,
                name: profile.displayName,
                photo: profile.photo
            }).save(function (err, user) {
                if (err) throw err;
                done(null, user);
            });
        }
    });
}));
//# sourceMappingURL=passport_config.js.map