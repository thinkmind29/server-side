'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportGoogleOauth = require('passport-google-oauth');

var _passportGoogleOauth2 = _interopRequireDefault(_passportGoogleOauth);

var _keys = require('../helpers/keys');

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleStrategy = _passportGoogleOauth2.default.OAuth2Strategy;

_passport2.default.use(new GoogleStrategy({
    clientID: _keys.google.GOOGLE_CONSUMER_KEY,
    clientSecret: _keys.google.GOOGLE_SECRET_KEY,
    callbackURL: 'http://localhost:5000/auth/google/callback'
}, function (token, tokenSecret, profile, done) {

    var person = {
        provider_id: profile.id,
        provider: profile.provider,
        name: profile.displayName,
        gender: profile.gender,
        photo: profile._json.image.url,
        cover: profile._json.cover.coverPhoto.url,
        email: profile._json.email

    };

    _passport2.default.serializeUser(function (profile, done) {
        done(null, profile);
    });
    _user2.default.findOne({ provider_id: profile._json.id }, function (err, user) {
        if (err) {
            return null, err;
        }
        if (user) {
            console.log(person);
            return done(null, person.token);
        } else {
            new _user2.default(person).save();
            return done(null, person);
        }
    });
}));

exports.default = _passport2.default;
//# sourceMappingURL=passport_config.js.map