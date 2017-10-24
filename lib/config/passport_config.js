'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _passportFacebook = require('passport-facebook');

var _passportFacebook2 = _interopRequireDefault(_passportFacebook);

var _keys = require('../helpers/keys');

var _keys2 = _interopRequireDefault(_keys);

var _helper = require('../helpers/helper');

var _helper2 = _interopRequireDefault(_helper);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacebookStrategy = _passportFacebook2.default.Strategy;

_passport2.default.serializeUser(function (user, done) {
    done(null, user.id);
});

_passport2.default.deserializeUser(function (user, done) {
    done(null, user);
});

_passport2.default.use(new FacebookStrategy({
    clientID: _keys2.default.ID,
    clientSecret: _keys2.default.SecretKey,
    callbackURL: _keys2.default.URL,
    profileFields: ['id', 'displayName', 'gender', 'name'],
    enableProof: true
    //passReqToCallback: true,
}, function (accessToken, refreshToken, profile, done) {

    _user2.default.findOne({ facebookId: profile.id }, function (err, person) {

        if (err) {
            return done(null, err);
        }if (person) {
            console.log(person);
            return done(null, person);
        } else {
            new _user2.default({
                facebookId: profile.id,
                name: profile.displayName,
                tokne: _helper2.default.token(profile.first_name),
                provider: profile.provider
            }).save(function (err, person) {
                if (err) {
                    return done(null, err);
                } else {
                    //console.log(person);
                    return done(null, person);
                }
            });
        }
    });
}));
//# sourceMappingURL=passport_config.js.map