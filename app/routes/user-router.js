'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userController = require('../controllers/user-controller.js');

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//VARIÁVEIS AUXILIARES
//IMPORT MODULOS DE TERCEIROS
var router = _express2.default.Router();
//IMPORT MODULO INTERNO

var UserSchema = {};

router.get('/', _userController2.default.get);
router.get('/auth/:id', _userController2.default.getUserByProviderId);
router.get('/id/:id', _userController2.default.getUserById);
router.get('/:token', _userController2.default.getUser);
router.get('/:param1/:param2', _userController2.default.getSearch);

router.post('/', _userController2.default.save);
router.post('/login', _userController2.default.login);
router.post('/registerSocial', _userController2.default.registerSocial);

router.put('/', _userController2.default.forgotPassword);
router.put('/:token', _userController2.default.changePassword);
router.put('/photo/:token', _userController2.default.changePhoto);

router.delete('/:token', _userController2.default.deleteAccount);

exports.default = router;
//# sourceMappingURL=user-router.js.map