'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _keys = require('../helpers/keys');

var _keys2 = _interopRequireDefault(_keys);

var _helper = require('../helpers/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//ARQUIVO COM AS KEYS DA APLICAÇÂO
//IMPORT MODULOS DE TERCEIROS
var app = (0, _express2.default)();
//ARQUIVO DE FUNÇÕES AUXILIARES

var port = _helper2.default.normalizePort(process.env.PORT || '5000');

//SET e USE usados na criação do servidor
app.set('port', port);
app.use(_bodyParser2.default.json());
//Receber parametros pela URL
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _cors2.default)());
//Autorizações para acesso da api
app.use(function (req, res, next) {
    res.setHeader('Access-Allow-Control-Origin', '*');
    res.setHeader('Access-Control-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Request-Witdh, X-Custom-Header, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//Levantamento do servidor
var server = _http2.default.createServer(app);
server.listen(port);

_helper2.default.message('Conected from the port ' + port);

exports.default = app;
//# sourceMappingURL=app_config.js.map