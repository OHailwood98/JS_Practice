import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name:{type:String, required:true},
    desc:{type:String, required:true},
    price:{type: String, required:true},
    stock: {type:Number, required:true},
    imagepath:{type:String, required:true},
}, {timestamps:true});

schema.method.mapInfo = function mapInfo(){
    return({
        name:name,
        desc:desc,
        price: parseFloat(price),
        stock: stock,
        imagepath: imagepath
    })
}

export default mongoose.model("product", schema)