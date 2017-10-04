import app from './config/app_config';
import user from './routes/userRouter';
import db from './config/db_config';
import passport from 'passport';
import fs from 'fs';


app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    fs.readFile(__dirname + '/public/index.html', (err, html) => {
        if (err) res.write("Página não encontrada");
        else res.write(html);
        res.end();
    })

})


app.use('/user', user);