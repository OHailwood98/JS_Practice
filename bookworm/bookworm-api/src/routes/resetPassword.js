import express from 'express';
import User from '../models/user'


const router = express.Router();

router.post("/", (req, res)=>{

    console.log(req.body)

    res.status(400).json({errors: {global:"wait ye prick"}})

    
})

export default router;