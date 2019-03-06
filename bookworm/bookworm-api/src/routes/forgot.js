import express from 'express';
import User from '../models/user'
import {sendResetEmail} from '../mailer'

const router = express.Router();

router.post("/", (req, res)=>{

    //console.log(req.body)

    User.findOne({email:req.body.email}).then(user =>{
        if (user){
            user.setResetToken();
            sendResetEmail(user)
            res.status(200).json({success: true})
            user.save();
        }else{
            res.status(400).json({errors: {global:"We have no account with that Email" }})
        }
    })
})

export default router;