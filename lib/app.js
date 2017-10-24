'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _app_config = require('./config/app_config');

var _app_config2 = _interopRequireDefault(_app_config);

var _userRouter = require('./routes/userRouter');

var _userRouter2 = _interopRequireDefault(_userRouter);

var _db_config = require('./config/db_config');

var _db_config2 = _interopRequireDefault(_db_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ROTA DE ACESSO À PAGINA INICIAL DA APLICAÇÃO CONTENDO A DOCUMENTAÇÃO DA MESMA
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
//# sourceMappingURL=app.js.map