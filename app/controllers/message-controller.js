'use strict';

var _message = require('../models/message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.allChat = function (req, res, next) {
    try {
        _message2.default.find({}, function (err, message) {
            if (err) res.status(404).send({ message: 'no message' });else res.status(200).send(message);
        });
    } catch (e) {
        res.send(500).send({ message: "Erro Interno" });
    }
};

exports.getChat = function (req, res, next) {

    try {
        var array = [];
        var send = _message2.default.find({ remetente_id: req.params.id, destinatario_id: req.params.id2 }, function (err, send) {
            if (err) res.status(404).send({ message: 'Sem menssagens!' });else _message2.default.find({ remetente_id: req.params.id2, destinatario_id: req.params.id }, function (err, reciver) {
                if (err) res.status(404).send({ message: 'Sem menssagens!' });else {
                    var _array = send.concat(reciver);
                    var order = _array.sort(function (a, b) {
                        return a.data > b.data ? 1 : b.data > a.data ? -1 : 0;
                    });
                    console.log(order);
                    res.status(202).send({ data: order });
                }
            });
        });
    } catch (e) {
        res.send(500).send({ message: "Erro Interno" });
    }
};

exports.newMessage = function (req, res, next) {
    var msg = req.body;
    console.log(msg);
    var dados = new _message2.default(msg);
    try {
        dados.save();
        res.send({ message: 'ok' });
    } catch (e) {
        res.status(500).send({ message: "Erro interno" });
    }
};
//# sourceMappingURL=message-controller.js.map