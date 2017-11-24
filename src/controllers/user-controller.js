import emailValidator from 'email-validator';

import User from '../models/user';

import helper from '../helpers/helper';

//GET

exports.get = (req, res, next) => {
    try{    User.find({}, (err, person) => {
            if(err) res.status(404).send({message: "Vazio!"})
            else res.status(200).send(person); 
        })}    
    catch(e) { res.status(500).send({message: 'Falha ao processar requisição!'});}
}


exports.getUser = (req, res, next) => {  
    try{
        User.findOne({token: req.params.token}, (err, person) =>{
            if(err) res.status(404).send({message: 'Usuário não encontrado'});
            else res.status(200).send(person);
        })} 
    catch(e) { res.status(500).send({message: 'Falha ao processar requisição!'});}      
} 

exports.getUserById = (req, res) => {
    try{
        User.findById(req.params.id, (err, person) =>{
            if(err) res.status(404).send({message: 'Usuário não encontrado'});
            else res.status(200).send(person);
        })} 
    catch(e) { res.status(500).send({message: 'Falha ao processar requisição!'});}    
}

exports.getUserByProviderId = (req, res, next) => {
    try{
        User.findOne({provider_id: req.params.id}).then(person => {
            if(person) res.status(200).send({message: 'Login Efetuado com Sucesso', data: person.token});
            else res.status(200).send({message: 'Usuário não existe'})
        });
    } 
    catch(e) { res.status(500).send({message: 'Falha ao processar requisição!'});}          
}

exports.getSearch = (req, res, next) =>{
    const param = req.params.param1;
    const param2 = req.params.param2;
    try{

        if(param === 'hability'){
            User.find({hability: param2}, (err, person) => {
                if(err) res.status(404).send({message: 'Usuário não encontrado'});
                else res.status(200).send(person);
            })
        }
        else if(param === 'city'){
            User.find({city: param2}, (err, person) => {
                if(err) res.status(404).send({message: 'Usuário não encontrado'});
                else res.status(200).send(person);
            })
        }
        else if(param === 'state'){
            User.find({state: param2}, (err, person) => {
                if(err) res.status(404).send({message: 'Usuário não encontrado'});
                else res.status(200).send(person);
            })
        }
        else if(param === 'nation'){
            User.find({nation: param2}, (err, person) => {
                if(err) res.status(404).send({message: 'Usuário não encontrado'});
                else res.status(200).send(person);
            })
        }
        else if(param === 'style'){
            User.find({tags: param2}, (err, person) => {
                if(err) res.status(404).send({message: 'Usuário não encontrado'});
                else res.status(200).send(person);
            })
        } else{
            return res.status(404);
        }
    } 
    catch(e) { res.status(500).send({message: 'Falha ao processar requisição!'});}          
}

//POST
exports.save = (req, res, next) => {
    
    const dados = req.body;
    dados.password = helper.encryptPassword(dados.password);
    dados.token = helper.token(dados.email, dados.hability, dados.gender);
    var user = new User(dados);

    try{
        if(emailValidator.validate(dados.email)){
            User.findOne({email: dados.email}, (err, person) => {
                if(err) res.status(500).send({message: 'Erro Interno!'});
                else if(person) res.status(200).send({message: 'Usuário já existe!'});
                else {user.save(); res.status(201).send({message: 'Usuário criado com sucesso!'})}
            })

        } else{
            res.status(400).send({message: 'Insira um email valido!'});
        }
    } 
    catch(e) { res.status(500).send({message: 'Falha ao processar requisição!'});}

};

exports.login = (req, res, next) => {
    const credentials = req.body;
    try{
    User.findOne({ email: credentials.email }, (err, person) => {
        if (person === null) res.status(200).send({message: "Usuário não existe!" });
        else {
            if (helper.decryptPassword(credentials.password, person.password)) {
                if (err) res.status(500).send({message: err });
                else if (credentials === null) res.status(404);
                else res.status(200).send({message: 'Login efetuado com sucesso!', data: person.token });
            } else res.status(200).send({message: "Senha Incorreta" })
      }})} 
    catch(e) { res.status(500).send({message: 'Falha ao processar requisição!'});}
};

exports.registerSocial = (req, res, next) => {
    const dados = req.body;
    dados.token = helper.token(dados.email, dados.hability, dados.gender);    
    try{
        User.findOne({provider_id: req.body.provider_id}).then( person => {
            if(person === null){
                new User(dados).save();
                res.send({message: 'Usuário Criado com Sucesso!', data: dados.token});
            } else {
                res.send({message: 'Usuário já existe'});
                }
                console.log(person);
            });
            
    }
    catch(e) { res.status(500).send({message: 'Falha ao processar requisição!'});}
    
}

//PUT
exports.changePassword = (req, res, next) => {

    try{
        let dados = req.body;
        let query = { token: req.params.token }
        let newPass = helper.encryptPassword(dados.password);


        User.findOneAndUpdate(query, { $set: { password: newPass }}, (err, person) =>   {
            if (err) res.status(500).send({message: err });
            else if(person === null) res.status(400).send({message: 'Você não está autorizado a acessar essa função' });
            else res.status(200).send({message: 'Senha alterada com sucesso'})
        })
    }
    catch(e) { res.status(500).send({message: 'Falha ao processar requisição!'});}
    
};

exports.forgotPassword = (req, res, next) => {
    
    try{
        let dados = req.body;
        let query = { email: dados.email }
        let newPass = helper.encryptPassword(dados.password);
        User.findOneAndUpdate(query, { $set: { password: newPass }}, (err, person) =>   {
            if (err) res.status(500).send({message: err });
            else if(person === null) res.status(400).send({message: 'Você não está autorizado a acessar essa função' });
            else res.status(200).send({message: 'Senha alterada com sucesso'})
        })
    }
    catch(e) { res.status(500).send({message: 'Falha ao processar requisição!'});}
};

exports.changePhoto = (req, res, next) => {
    try{
        let dados = req.body;
        let query = {token: req.params.token};
        console.log(query);
        User.findOneAndUpdate(query, {$set: { photo: dados.photo }}, (err, person) => {
            if(err) res.status(500).send({message: 'Erro interno!'});
            else if(person === null) res.status(400).send({message: 'Você não está autorizado a acessar essa função' });
            else res.status(200).send({message: 'Photo alterada com sucesso!'})            
        })
    }
    catch(e) { res.status(500).send({message: 'Falha ao processar requisição!'});}    
}

//DELETE
exports.deleteAccount = (req, res, next) => {
    
    try{
    const query = { token: req.params.token };

    User.findOneAndRemove(query, (err) => {
        if (err) res.status(404).send({ message: 'Não foi possivel deletar a conta!' });
        else res.status(200).send({ message: "Conta deletada com sucesso" })
    })
        }
        
    catch(e) { res.status(500).send({message: 'Falha ao processar requisição!'});}


};

