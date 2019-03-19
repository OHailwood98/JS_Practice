import express from 'express';

const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });
 
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("myImage");
 

router.post("/add", (req, res)=>{
    const {credentials} = req.body;
    console.dir(credentials)

    res.status(400).json({errors: {global: "failed"}})

})

export default router;