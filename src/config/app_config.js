//IMPORT MODULOS DE TERCEIROS
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import cors from 'cors';

//ARQUIVO COM AS KEYS DA APLICAÇÂO
import keys from '../helpers/keys';
//ARQUIVO DE FUNÇÕES AUXILIARES
import helper from '../helpers/helper';


const app = express();
const port = helper.normalizePort(process.env.PORT || '5000');



//SET e USE usados na criação do servidor
app.set('port', port);
app.use(bodyParser.json());
//Receber parametros pela URL
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//Autorizações para acesso da api
app.use((req, res, next) => {
    res.setHeader('Access-Allow-Control-Origin', '*');
    res.setHeader('Access-Control-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Request-Witdh, X-Custom-Header, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


//Levantamento do servidor
const server = http.createServer(app);
server.listen(port);

helper.message(`Conected from the port ${port}`);


export default app;