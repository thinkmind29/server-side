'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _keys = require('./helpers/keys');

var _app_config = require('./config/app_config');

var _app_config2 = _interopRequireDefault(_app_config);

var _userRouter = require('./routes/user-router');

var _userRouter2 = _interopRequireDefault(_userRouter);

var _messageRouter = require('./routes/message-router');

var _messageRouter2 = _interopRequireDefault(_messageRouter);

var _db_config = require('./config/db_config');

var _db_config2 = _interopRequireDefault(_db_config);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app_config2.default.get('/', function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    _fs2.default.readFile(__dirname + '/public/index.html', function (err, html) {
        if (err) res.write("Página não encontrada");else res.write(html);
        res.end();
    });
});

//ROTA DE ACESSO AOS METODOS E ROTAS DE USER


//IMPORTS DE MODULOS EXTERNOS
//IMPORTS DE MODULOS DE TERCEIROS
_app_config2.default.use('/user', _userRouter2.default);
_app_config2.default.use('/chat', _messageRouter2.default);
//# sourceMappingURL=app.js.map