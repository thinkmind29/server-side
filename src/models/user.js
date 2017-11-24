import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = Schema({

    provider_id :   { type: String, trim: true },
    provider    :   { type: String, trim: true },
    name        :   { type: String, trim: true },
    age         :   { type: Number, trim: true },
    gender      :   { type: String, trim: true },
    password    :   { type: String, trim: true },
    email       :   { type: String, trim: true },

    hability    :   { type: String, trim: true },
    biography   :   { type: String, trim: true },
    photo       :   { type: String, trim: true },
    cover       :   { type: String, trim: true },

    instagram   :   { type: String, trim: true },
    youtube     :   { type: String, trim: true },
    twitter     :   { type: String, trim: true },
    soundCloud  :   { type: String, trim: true },
    facebook    :   { type: String, trim: true },
    
    city        :   { type: String, trim: true },
    state       :   { type: String, trim: true },
    nation      :   { type: String, trim: true },
    tags        :   [{ type: String }],
    token       :   { type: String },
    created_at  :   { type: Date, default: Date.valueOf() }  
});

//documentar estrutura de dados
export default mongoose.model('User', UserSchema);