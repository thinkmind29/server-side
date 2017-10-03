'use strict';

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _helper = require('../helpers/helper');

var _helper2 = _interopRequireDefault(_helper);

var _emailValidator = require('email-validator');

var _emailValidator2 = _interopRequireDefault(_emailValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.save = function (user, callback) {

    if (_emailValidator2.default.validate(user.email)) {
        _user2.default.findOne({ 'email': user.email }).then(function (person) {
            if (person) {
                callback({ status: 400, resp: 'Usuário já existe' });
            } else {
                new _user2.default({
                    name: user.name,
                    lastName: user.lastName,
                    password: _helper2.default.encryptPassword(user.password),
                    email: user.email,
                    hability: user.hability,
                    biography: user.biography,
                    token: _helper2.default.token(user.name),
                    create_at: user.data

                }).save(function (err, users) {
                    if (err) return callback({ status: 500 });else {

                        return callback({ status: 201, message: users });
                    };
                });
            }
        }).catch(function (err) {
            throw err;
        });
    } else {
        callback({ status: 400, message: 'Insira um email valido' });
    }
};

exports.login = function (user, callback) {

    _user2.default.findOne({ email: user.email }, function (err, person) {
        if (person === null) callback({ status: 404, message: "Usuário não encontrado" });else {
            if (_helper2.default.decryptPassword(user.password, person.password)) {
                if (err) callback({ status: 500, message: err });
                if (user === null) callback({ status: 404 });else callback({ status: 200, message: user.token });
            } else {
                callback({ status: 404, message: "Senha Incorreta" });
            }
        }
    });
};

exports.changePassword = function (user, callback) {
    var query = { token: user.token };
    _user2.default.findOneAndUpdate(query, { $set: { password: user.newPassword } }, function (err, person) {
        if (err) {
            callback({ status: 500, message: err });
        } else if (person === null) {
            callback({ status: 400, message: 'Você não está autorizado a acessar essa função' });
        } else {
            callback({ status: 200, message: 'Senha alterada com sucesso' });
        }
    });
};

exports.deleteAccount = function (user, callback) {
    var query = { token: user };
    console.log(user);
    _user2.default.findOneAndRemove(query, function (err) {
        if (err) {
            callback({ status: 404, message: 'Não foi possivel deletar a conta!' });
        } else {
            callback({ status: 200, message: "Conta deletada com sucesso" });
        }
    });
};

exports.findTag = function (user, callback) {};
//# sourceMappingURL=userController.js.map