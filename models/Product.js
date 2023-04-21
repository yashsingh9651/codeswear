const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    slug:{type:String,required:true,unique:true},
    title:{type:String,required:true},
    desc:{type:String},
    img:{type:String,required:true},
    category:{type:String,required:true},
    size:{type:String},
    color:{type:String},
    availableQty:{type:Number,required:true},
    price:{type:Number,required:true}
},{timestamps:true});
mongoose.models={};
export default mongoose.model('Product', ProductSchema);