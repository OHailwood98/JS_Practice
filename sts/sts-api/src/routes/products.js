import express from 'express';
import path from 'path'
import Product from '../models/product'

var appDir = path.dirname(require.main.filename);
var multer  = require('multer')

var storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, `${appDir}/public/static/`)
   },
   filename: function (req, file, cb) {
     cb(null, file.originalname)
   }
 })
var upload = multer({ storage: storage })

const router = express.Router()


router.get("/", (req,res) =>{
   Product.find().then(products =>{
      res.status(200).json({products: products})
   })
})


router.post('/addpic', upload.single('image'), (req, res) => {

   console.log(req.body)
   if (!req.file) {
     console.log("No file received");
     return res.send({
       success: false
     });
 
   } else {
     console.log('file received');
     return res.send({
       success: true
     })
   }
 });

 router.post("/add", (req, res)=>{
   const {credentials} = req.body;

   const product = new Product({
      name: credentials.name,
      desc: credentials.description,
      price: credentials.price,
      stock: credentials.stock,
      imagepath: "http://localhost:8080/images/static/" + credentials.filepath
   })

   product.save()
      .then( prodcut => res.status(200).json({status: "success"}))
      .catch(err => res.status(400).json({ errors: err.errors }));

   console.log(credentials)
})

router.post("/reduce", (req, res)=>{
   const credentials = req.body;

   console.log(req.body)
   Product.findOne({name:credentials.name}).then(product =>{
      if(product){
         product.stock = product.stock -1
         if(product.stock <0){
            product.stock =0;
         }
         product.save().then(product => res.status(200).json({stock: product.stock}))
      }else{
         res.status(400).json({errors: {global:"Product Not Found"}})
      }
   })

   
})

router.post("/id", (req,res) =>{
   var {id} = req.body
   Product.findById(id).then(product =>{
      if(product){
         res.status(200).json({product: product})
      }else{
         res.status(400).json({errors: {global:"Product Not Found"}})
      }
   })
})

router.post("/edit", (req,res) =>{
   var {credentials} = req.body
   console.dir(credentials)
   Product.findById(credentials.id).then(product =>{
      if(product){
         product.name= credentials.name;
         product.desc= credentials.description;
         product.price = credentials.price;
         product.stock = credentials.stock;
         product.save()
            .then(product => res.status(200).json({success: true}))
            .catch(err => res.status(400).json({errors: {global:"Update Failed"}}))
      }else{
         res.status(400).json({errors: {global:"Product Not Found"}})
      }
   })
})

export default router;