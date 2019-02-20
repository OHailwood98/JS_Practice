import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'mongoose-unique-validator'

const schema = new mongoose.Schema({
    email:{type:String, required:true, lowercase:true, index:true, unique:true},
    passwordHash:{type:String, required:true},
    confirmed:{type: Boolean, default:false},
    confirmationToken: {type:String, default: ""}
}, {timestamps:true});

schema.methods.passwordCheck = function passwordCheck(password){
    return bcrypt.compareSync(password, this.passwordHash, function(err, hash){
        if(err) throw err;
    });
}

schema.methods.genToken = function genToken(){
    return jwt.sign({
        email: this.email
    }, process.env.JWT_SECRET)
}

schema.methods.genConfirmUrl = function genConfirmUrl(){
    return ` ${process.env.HOST}/confirmation/${this.confirmationToken}`
}

schema.methods.toAuthJson = function toAuthJson(){
    return ({
        email : this.email,
        token : this.genToken()
    })
}
schema.methods.setPassword = function setPassword(password){
    this.passwordHash = bcrypt.hashSync(password, 10, function(err, hash){
        if(err) throw err;
    });
}

schema.methods.setConfirmToken = function setConfirmToken(){
    this.confirmationToken = this.genToken();
}

schema.plugin(validator, {message: "This Email is already registered"})
export default mongoose.model('user', schema); 