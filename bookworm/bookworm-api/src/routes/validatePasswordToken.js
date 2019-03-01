import express from 'express';
import User from '../models/user'


const router = express.Router();

router.post("/", (req, res)=>{

    console.log(req.body)
    User.findOne({resetToken:req.body.token}).then(user =>{
        if(user && user.validateResetToken()){
            
            res.status(200).json({success:true})
        }else{
            res.status(400).json({errors: {global:"Invalid Token"}})
        }
    })
})


export default router;