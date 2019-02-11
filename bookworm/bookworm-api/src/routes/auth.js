import express from 'express';
import User from '../models/user'

const router = express.Router();

router.post("/", (req, res)=>{
    const {credentials} = req.body;
    User.findOne({email:credentials.email}).then(user =>{
        if(user && user.passwordCheck(credentials.password)){
            res.json({success:true, user: user.toAuthJson()})
        }else{
            res.status(400).json({errors: {global: "Password Incorrect or User Not Found"}})
        }
    })
})

export default router;