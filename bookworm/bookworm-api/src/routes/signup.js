import express from 'express';
//import User from '../models/user'

const router = express.Router();

router.post("/", (req, res)=>{
    const {credentials} = req.body;
 
    res.status(400).json({errors: {global: "Password Incorrect or User Not Found"}})

    console.log(credentials)

})

export default router;