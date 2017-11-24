'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _messageController = require('../controllers/message-controller');

var _messageController2 = _interopRequireDefault(_messageController);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _messageController2.default.allChat);
router.get('/:id/:id2', _messageController2.default.getChat);
router.post('/', _messageController2.default.newMessage);

exports.default = router;
//# sourceMappingURL=message-router.js.map