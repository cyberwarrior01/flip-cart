import { mongoose } from 'mongoose';

const Userschema = mongoose.Schema({
    Firstname:{
        type: String,
        required: [true  , 'Firstname is required']
    },
    Lastname:{
        type: String,
        required: [true  , 'Lastname is required']
    },
    Username:{
        type: String,
        required: [true  , 'Username is required'],
        unique: true 
    },
    Email:{
        type: String,
        required: [true  , 'Email is required'],
        unique: true 
    },
    Phone:{
        type: Number ,
        required : [true , 'Phone numbere is required'],
        unique: true
    }

},{timestamp : true});

const User = mongoose.model('user', Userschema);

export {User};

