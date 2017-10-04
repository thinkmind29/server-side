import mongoose from 'mongoose';
import helper from '../helpers/helper';

const url = "mongodb://think:think@ds135444.mlab.com:35444/thinkminddb";
//const url = "mongodb://localhost:27017/thinkdb";
mongoose.Promise = global.Promise;


mongoose.connect(url, function(err, res) {
    if (err) {
        console.log('Não foi possível conectar');
    } else {
        console.log('Conetado ao banco de dados');
    }
});