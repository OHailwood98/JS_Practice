import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'mongoose-unique-validator'

const schema = new mongoose.Schema({
    email:{type:String, required:true, lowercase:true, index:true, unique:true},
    passwordHash:{type:String, required:true},
    confirmed:{type: Boolean, default:false},
    confirmationToken: {type:String, default: ""},
    resetToken: {type:String, default: ""}
}, {timestamps:true});

schema.methods.passwordCheck = function passwordCheck(password){
    return bcrypt.compareSync(password, this.passwordHash, function(err, hash){
        if(err) throw err;
    });
}

schema.methods.genToken = function genToken(){
    return jwt.sign({
        email: this.email,
        confirmed: this.confirmed
    }, process.env.JWT_SECRET)
}

schema.methods.genResetToken = function genResetToken(){
    return jwt.sign({
        _id:this._id
    }, process.env.JWT_SECRET, {expiresIn: 600})
}

schema.methods.genConfirmUrl = function genConfirmUrl(){
    return ` ${process.env.HOST}/confirmation/${this.confirmationToken}`
}

schema.methods.genResetUrl = function genResetUrl(){
    return ` ${process.env.HOST}/passwordreset/${this.resetToken}`
    //return 'shit'
}

schema.methods.toAuthJson = function toAuthJson(){
    return ({
        email : this.email,
        confirmed: this.confirmed,
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

schema.methods.setResetToken = function setResetToken(){
    this.resetToken = this.genResetToken()
}

schema.methods.validateResetToken = function validateResetToken(){
    var valid = false;
    jwt.verify(this.resetToken, process.env.JWT_SECRET, function(err, decoded){
        
        if(decoded){
            console.log("Valid");
            valid= true;
        }else{
        console.log("Not Valid");}
        
    })
    return valid;
    //return true;
}

schema.plugin(validator, {message: "This Email is already registered"})
export default mongoose.model('user', schema); 