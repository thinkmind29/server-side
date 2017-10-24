'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userController = require('../controllers/userController.js');

var _userController2 = _interopRequireDefault(_userController);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/auth/facebook', _passport2.default.authenticate('facebook', { session: false }));
router.get('/auth/facebook/callback', _passport2.default.authenticate('facebook'), function (req, res) {
   res.json({ name: "Tassio", email: "email@email" });
});
//# sourceMappingURL=facebookRouter.js.map