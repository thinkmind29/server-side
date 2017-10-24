'use strict';

var _emailValidator = require('email-validator');

var _emailValidator2 = _interopRequireDefault(_emailValidator);

var _userRepository = require('../repository/user-repository');

var _userRepository2 = _interopRequireDefault(_userRepository);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _helper = require('../helpers/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.retorna = function (req, res, next) {
    try {
        _user2.default.find({}, function (err, person) {
            if (err) res.status(404).send({ message: "Vazio!" });else res.status(200).send(person);
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar requisição!' });
    }
};

exports.buscar = function (req, res, next) {
    try {
        _user2.default.findOne({ token: req.params.token }, function (err, person) {
            if (err) res.status(404).send({ message: 'Usuário não encontrado' });else res.status(200).send(person);
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar requisição!' });
    }
};

exports.save = function (req, res, next) {

    var dados = req.body;
    dados.password = _helper2.default.encryptPassword(dados.password);
    dados.token = _helper2.default.token(dados.email, dados.hability, dados.gender);
    var user = new _user2.default(dados);

    try {
        if (_emailValidator2.default.validate(dados.email)) {
            _user2.default.findOne({ email: dados.email }, function (err, person) {
                if (err) res.status(500).send({ message: 'Erro Interno!' });else if (person) res.status(400).send({ message: 'Usuário já existe!' });else {
                    user.save();res.status(201).send({ message: 'Usuário criado com sucesso!' });
                }
            });
        } else {
            res.status(400).send({ message: 'Insira um email valido!' });
        }
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar requisição!' });
    }
};

exports.login = function (req, res, next) {
    var credentials = req.body;
    try {
        _user2.default.findOne({ email: credentials.email }, function (err, person) {
            if (person === null) res.status(404).send({ message: "Usuário não existe!" });else {
                if (_helper2.default.decryptPassword(credentials.password, person.password)) {
                    if (err) res.status(500).send({ message: err });else if (credentials === null) res.status(404);else res.status(200).send({ message: 'Login efetuado com sucesso!', data: person.token });
                } else res.status(404).send({ message: "Senha Incorreta" });
            }
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar requisição!' });
    }
};

exports.changePassword = function (req, res, next) {

    try {
        var dados = req.body;
        var query = { token: req.params.token };
        var newPass = _helper2.default.encryptPassword(dados.password);

        _user2.default.findOneAndUpdate(query, { $set: { password: newPass } }, function (err, person) {
            if (err) res.status(500).send({ message: err });else if (person === null) res.status(400).send({ message: 'Você não está autorizado a acessar essa função' });else res.status(200).send({ message: 'Senha alterada com sucesso' });
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar requisição!' });
    }
};

exports.forgotPassword = function (req, res, next) {

    try {
        var dados = req.body;
        var query = { email: dados.email };
        var newPass = _helper2.default.encryptPassword(dados.password);
        _user2.default.findOneAndUpdate(query, { $set: { password: newPass } }, function (err, person) {
            if (err) res.status(500).send({ message: err });else if (person === null) res.status(400).send({ message: 'Você não está autorizado a acessar essa função' });else res.status(200).send({ message: 'Senha alterada com sucesso' });
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar requisição!' });
    }
};

exports.deleteAccount = function (req, res, next) {

    try {
        var query = { token: req.params.token };

        _user2.default.findOneAndRemove(query, function (err) {
            if (err) res.status(404).send({ message: 'Não foi possivel deletar a conta!' });else res.status(200).send({ message: "Conta deletada com sucesso" });
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar requisição!' });
    }
};
//# sourceMappingURL=user-controller.js.map