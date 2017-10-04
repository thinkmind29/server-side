import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import helper from '../helpers/helper';
import passport from 'passport';
import keys from '../helpers/keys';

import ppt_config from './passport_config';
const app = express();
const port = helper.normalizePort(process.env.PORT || '3000');





app.set('port', port);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {

    res.setHeader('Access-Allow-Control-Origin', '*');
    res.setHeader('Access-Control-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Request-Witdh, content-type, Authorization');
    next();
});

const server = http.createServer(app);
server.listen(port);

helper.message(`Conected from the port ${port}`);


export default app;