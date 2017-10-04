import passport from 'passport';
import expressSession from 'express-session';
import FBPassport from 'passport-facebook';
import keys from '../helpers/keys';
import userController from '../controllers/userController';

const FacebookStrategy = FBPassport.Strategy;
passport.use(new FacebookStrategy({
        clientID: keys.ID,
        clientSecret: keys.SecretKey,
        callbackURL: keys.URL,
        profileFields: ['id', 'displayName', 'email'],
        enableProof: true
    },

    function(accessToken, refreshToken, profile, callback) {
        callback(profile);
    }

));