//IMPORTS DE MODULOS DE TERCEIROS
import fs from 'fs';
import { google } from './helpers/keys';

//IMPORTS DE MODULOS EXTERNOS
import app from './config/app_config';
import user from './routes/user-router';
import chat from './routes/message-router';
import db from './config/db_config';
import cors from 'cors';


app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    fs.readFile(__dirname + '/public/index.html', (err, html) => {
        if (err) 
        res.write("Página não encontrada");
        else res.write(html);
        res.end();
    });
});


//ROTA DE ACESSO AOS METODOS E ROTAS DE USER
app.use('/user', user);
app.use('/chat', chat);