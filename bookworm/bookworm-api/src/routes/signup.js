import express from 'express';
import User from '../models/user';
import {sendConfirmEmail} from '../mailer'

const router = express.Router();

router.post("/", (req, res)=>{
    const {credentials} = req.body;
    const user = new User({
        email:credentials.email,
    })
    
    user.setPassword(credentials.password);
    user.setConfirmToken();
    user.save()
        .then(user => {
            sendConfirmEmail(user)
            res.status(200).json({user: user.toAuthJson()})
        })
        .catch(err => res.status(400).json({ errors: err.errors }));
})

export default router;