import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;


const UserSchema = Schema({

    name: {

        type: String,
        required: [true, "Insert name"],
        trim: true,
        lowercase: true
    },

    provider: String,
    facebookId: String,
    photo: String,

    email: {
        type: String,
        //required: [true, "Insert email"],
        unique: true,
        trim: true,
        lowercase: true
    },

    password: {
        type: String,
        //required: [true, "Insert password"],
        trim: true,
    },

    hability: {
        type: String,
        //required: [true, "Insert hability"],
        lowercase: true
    },


    biography: {
        type: String,
        //required: [true, "Insert biography"],
        lowercase: true
    },
    token: {
        type: String,
        //required: [true, "Não foi inserido o token"],
    },
    create_at: {
        type: Date,
        default: Date.now
    }

});


export default mongoose.model('User', UserSchema);