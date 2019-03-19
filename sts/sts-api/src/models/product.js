import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name:{type:String, required:true},
    desc:{type:String, required:true},
    price:{type: mongoose.Schema.Types.Decimal128, required:true},
    stock: {type:Number, required:true},
    onOff:{type: Boolean, required:true},
}, {timestamps:true});

export default mongoose.model("product", schema)