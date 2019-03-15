import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title:{type:String, required:true},
    authors:{type:String, required:true},
    covers:{type: String, required:true},
    goodreadsId: {type:String},
    pages: {type:Number, required:true},
    userId:{type: mongoose.Schema.Types.ObjectId, required:true},
}, {timestamps:true});

export default mongoose.model("book", schema)