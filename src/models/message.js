import mongoose from 'mongoose';
const Schema = mongoose.Schema;



const MsgSchema = Schema({

    remetente_id        : { type: String },
    destinatario_id     : { type: String },
    mensagem            : { type: String },
    data                : { type: Date, default: Date.valueOf() }
});


export default mongoose.model('Message', MsgSchema);