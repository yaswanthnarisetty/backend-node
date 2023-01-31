
import mongoose from 'mongoose';

const productScheme = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String
});


export default mongoose.model('products', productScheme);