import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const schema = new mongoose.Schema({
    email:{type:String, required:true, lowercase:true, index:true},
    passwordHash:{type:String, required:true}
}, {timestamps:true});

schema.methods.passwordCheck = function passwordCheck(passowrd){
    return bcrypt.compareSync(passowrd, this.passwordHash)
}

export default mongoose.model('user', schema); 