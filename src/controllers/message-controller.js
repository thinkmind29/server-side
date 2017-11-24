import Message from '../models/message';



exports.allChat = (req, res, next) => {
    try{
        Message.find({}, (err, message) => {
            if(err) res.status(404).send({message: 'no message'});
            else res.status(200).send(message);
        })
    }
  catch(e) { res.send(500).send({message: "Erro Interno"}) }

}

exports.getChat = (req, res, next) => {

    try{
        let array = [];
        const send = Message.find({ remetente_id: req.params.id, destinatario_id: req.params.id2 }, (err, send) =>{
            if(err) res.status(404).send({message: 'Sem menssagens!'})
            else Message.find({remetente_id: req.params.id2, destinatario_id: req.params.id }, (err, reciver) => {
                if(err) res.status(404).send({message: 'Sem menssagens!'})
                else {
                    let array = send.concat(reciver);
                    let order = array.sort((a,b) => {
                       return a.data > b.data ? 1 : b.data > a.data ? -1 : 0
                    })        
                    console.log(order);
                    res.status(202).send({data: order});
                }
                       
            });
        })



     
    } catch(e) { res.send(500).send({message: "Erro Interno"}) }

}


exports.newMessage = (req, res, next) => {
    var msg = req.body;
    console.log(msg);
    var dados = new Message(msg);
    try{
        dados.save();
        res.send({message: 'ok'})
    } catch(e) {res.status(500).send({message: "Erro interno"})}
}


