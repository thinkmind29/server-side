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


exports.token = (param1, param2, param3) => {
    return jwt.sign({ 'param1' : param1, 'param2': param2, 'param3': param3 }, 'secret-love-song');
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


