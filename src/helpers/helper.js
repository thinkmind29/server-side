import bcrypt from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';



exports.normalizePort = (val) => {

    const port = parseInt(val);

    if (isNaN(port))
        return val;
    if (port >= 0)
        return port;

    return false;
}


exports.token = (name) => {
    return jwt.sign({ 'name': name }, 'secret-love-song');
};

exports.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
};
exports.decryptPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};

exports.message = (message) => {

    console.log(message);
}