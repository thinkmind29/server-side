import mongoose from 'mongoose';
import helper from '../helpers/helper';

const url = "mongodb://musically:12345678@ds243055.mlab.com:43055/musically";
// const url = "mongodb://localhost:27017/thinkdb";
mongoose.Promise = global.Promise;


mongoose.connect(url, function(err, res) {
    if (err) {
        console.log('Não foi possível conectar');
    } else {
        console.log('Conetado ao banco de dados');
    }
});