const mongoose = require('mongoose');
const CartItemSchema = new mongoose.Schema({
    slug:{type:String,required:true},
    title:{type:String,required:true},
    img:{type:String,required:true},
    category:{type:String,required:true},
    size:{type:String},
    color:{type:String},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true}
},{timestamps:true});
mongoose.models={};
export default mongoose.model('CartItem', CartItemSchema);