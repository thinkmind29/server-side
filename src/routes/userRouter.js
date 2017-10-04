import express from 'express';
import userController from '../controllers/userController.js';

import passport from 'passport';

const router = express.Router();

var UserSchema = {};

router.get('/:tag', (req, res) => {
    UserSchema = req.body;
    userController.findTag(UserSchema, (resp) => {
        res.send(resp);
    });
});
router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback', passport.authenticate('facebook'));
router.post('/', (req, res) => {

    UserSchema = req.params.code;
    console.log(UserSchema);
    userController.save(UserSchema, (resp) => {
        res.send(resp);
    })
});
router.post('/login', (req, res) => {
    UserSchema = req.body;
    userController.login(UserSchema, resp => {
        res.status(200).json(resp);
    })
});
router.delete("/:token", (req, res) => {

    const token = req.params.token;
    console.log(token);
    userController.deleteAccount(token, resp => {
        res.send(resp);
    });

});




export default router;