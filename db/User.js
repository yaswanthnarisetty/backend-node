import mongoose from 'mongoose';

const userScheme = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});



export default mongoose.model('users', userScheme);