import express from 'express';


const router = express.Router();

router.post("/", (req, res)=>{
    const {credentials} = req.body;
    if(credentials.password === process.env.staff){
        res.status(200).json({user:{token:process.env.token}})
    }else{
        res.status(400).json({errors: {global: "failed"}})
    }
})

export default router;