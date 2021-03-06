import express from 'express';
import User from '../models/user'


const router = express.Router();

router.post("/", (req, res)=>{

    //console.log(req.body)
    var data = req.body.data;

    User.findOne({resetToken:data.token}).then(user =>{
        if(user){
            if(user.passwordCheck(data.password)){
                res.status(400).json({errors: {global:"Please choose a new Password"}})
            }else{
                user.setPassword(data.password);
                user.resetToken = "";
                user.save()
                    .then(user => {
                        res.status(200).json({user: user.toAuthJson()})
                    })
            }
        }else{
            res.status(400).json({errors: {global:"User Not Found"}})
        }
    })
})

export default router;