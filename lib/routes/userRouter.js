'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userController = require('../controllers/userController.js');

var _userController2 = _interopRequireDefault(_userController);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var UserSchema = {};

router.get('/:tag', function (req, res) {
    UserSchema = req.body;
    _userController2.default.findTag(UserSchema, function (resp) {
        res.send(resp);
    });
});
router.get('/auth/facebook', _passport2.default.authenticate('facebook'));
router.get('/auth/facebook/callback', _passport2.default.authenticate('facebook'), function (req, res) {
    console.log(req.body);
    var UserSchema = req.body;
    _userController2.default.facebookUser(UserSchema, function (resp) {});
});
router.post('/', function (req, res) {

    UserSchema = req.body;
    _userController2.default.save(UserSchema, function (resp) {
        res.send(resp);
    });
});
router.post('/login', function (req, res) {
    UserSchema = req.body;
    _userController2.default.login(UserSchema, function (resp) {
        res.status(200).json(resp);
    });
});
router.delete("/:token", function (req, res) {

    var token = req.params.token;
    console.log(token);
    _userController2.default.deleteAccount(token, function (resp) {
        res.send(resp);
    });
});

exports.default = router;
//# sourceMappingURL=userRouter.js.map