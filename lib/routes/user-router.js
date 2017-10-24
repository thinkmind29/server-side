'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userController = require('../controllers/user-controller.js');

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//VARIÁVEIS AUXILIARES
var router = _express2.default.Router();
//IMPORT MODULO INTERNO
//IMPORT MODULOS DE TERCEIROS

var UserSchema = {};

router.get('/', _userController2.default.retorna);
router.get('/:token', _userController2.default.buscar);
router.post('/', _userController2.default.save);
router.post('/login', _userController2.default.login);
router.put('/', _userController2.default.forgotPassword);
router.put('/:token', _userController2.default.changePassword);
router.delete('/:token', _userController2.default.deleteAccount);

exports.default = router;
//# sourceMappingURL=user-router.js.map