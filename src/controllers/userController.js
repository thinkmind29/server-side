import User from '../models/user';
import helper from '../helpers/helper';
import emailValidator from 'email-validator';

exports.save = (user, callback) => {

    if (emailValidator.validate(user.email)) {
        User.findOne({ 'email': user.email }).then((person) => {
            if (person) {
                callback({ status: 400, resp: 'Usuário já existe' });
            } else {
                new User({
                    name: user.name,
                    lastName: user.lastName,
                    password: helper.encryptPassword(user.password),
                    email: user.email,
                    hability: user.hability,
                    biography: user.biography,
                    token: helper.token(user.name),
                    create_at: user.data,

                }).save((err, users) => {
                    if (err)
                        return callback({ status: 500 });

                    else {

                        return callback({ status: 201, message: users })
                    };
                });
            }
        }).catch(err => { throw err; })
    } else {
        callback({ status: 400, message: 'Insira um email valido' })
    }

}

exports.facebookUser = (user, callback) => {
    User.findOne({ facebookId: user.id }).then(person => {
        if (person)
            callback({ status: 200, message: person.token })
        else
            new User = ({
                name: user.displayName,
                facebookId: user.id,
                provider: user.provider
            }).save((err, user) => {
                if (err)
                    callback({ status: 500 })
                else
                    callback({ status: 201, message: person.token })
            })
    })
}

exports.login = (user, callback) => {

    User.findOne({ email: user.email }, (err, person) => {
        if (person === null) callback({ status: 404, message: "Usuário não encontrado" })
        else {
            if (helper.decryptPassword(user.password, person.password)) {
                if (err) callback({ status: 500, message: err });
                if (user === null) callback({ status: 404 });
                else callback({ status: 200, message: user.token });
            } else {
                callback({ status: 404, message: "Senha Incorreta" })
            }
        }
    })

};

exports.changePassword = (user, callback) => {
    var query = { token: user.token }
    User.findOneAndUpdate(query, { $set: { password: user.newPassword } }, (err, person) => {
        if (err) {
            callback({ status: 500, message: err });
        } else if (person === null) {
            callback({ status: 400, message: 'Você não está autorizado a acessar essa função' });
        } else {
            callback({ status: 200, message: 'Senha alterada com sucesso' });
        }
    });
}

exports.deleteAccount = (user, callback) => {
    const query = { token: user };
    console.log(user);
    User.findOneAndRemove(query, (err) => {
        if (err) {
            callback({ status: 404, message: 'Não foi possivel deletar a conta!' });
        } else {
            callback({ status: 200, message: "Conta deletada com sucesso" })
        }
    })

}

exports.findTag = (user, callback) => {}