'use strict';

exports.save = function (user, callback) {
    if (emailValidator.validate(user.email)) {
        User.findOne({ 'email': user.email }).then(function (person) {
            if (person) {
                callback({ status: 400, resp: 'Usuário já existe' });
            } else {

                new User({

                    name: user.name,
                    age: user.age,
                    gender: user.gender,
                    email: user.email,
                    password: helper.encryptPassword(user.password),
                    hability: user.hability,
                    biography: user.biography,
                    addrees: user.address,
                    tags: user.tags,
                    token: helper.token(user.genger, user.email, user.hability)

                }).save(function (err, users) {
                    if (err) return callback({ status: 500 });else {

                        return callback({ status: 201, message: users });
                    };
                });
            }
        }).catch(function (err) {
            throw err;
        });
    } else {
        callback({ status: 400, message: 'Insira um email valido' });
    }
};
//# sourceMappingURL=user-repository.js.map