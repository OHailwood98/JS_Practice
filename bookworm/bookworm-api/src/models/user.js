import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const schema = new mongoose.Schema({
    email:{type:String, required:true, lowercase:true, index:true},
    passwordHash:{type:String, required:true}
}, {timestamps:true});

schema.methods.passwordCheck = function passwordCheck(passowrd){
    return bcrypt.compareSync(passowrd, this.passwordHash)
}

schema.methods.genToken = function genToken(){
    return jwt.sign({
        email: this.email
    }, process.env.JWT_SECRET)
}

schema.methods.toAuthJson = function toAuthJson(){
    return ({
        email : this.email,
        token : this.genToken()
    })
}

export default mongoose.model('user', schema); 