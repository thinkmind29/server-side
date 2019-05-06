const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = Schema({
    name        :   { type: String, trim: true },
    password_hash    :   { type: String, trim: true },
    email       :   { type: String, trim: true },
    created_at  :   { type: Date, default: Date.valueOf() }  
});

//documentar estrutura de dados
export default mongoose.model('User', UserSchema);