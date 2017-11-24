'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUser = undefined;

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUser = exports.getUser = function getUser(profile) {
    (function (req, res, next) {
        res.send(profile);
    });
};
//# sourceMappingURL=google-controller.js.map