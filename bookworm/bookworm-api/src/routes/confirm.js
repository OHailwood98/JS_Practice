import express from 'express';
import User from '../models/user'

const router = express.Router();

router.post("/", (req, res)=>{
    User.findOneAndUpdate({confirmationToken:req.body.eToken}, {confirmed: true, confirmationToken: ""}, {new:true})
        .then(user => {user ? res.json({user: user.toAuthJson()}): 
        res.status(400).json({errors: {global:"Token Not Found" }})
        console.log(user)
    })
})

export default router;