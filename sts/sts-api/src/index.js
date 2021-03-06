import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import dotenv from "dotenv";
import Promise from 'bluebird';
import auth from './routes/auth'
import products from './routes/products'


dotenv.config();

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
//mongoose.Promise = Promise;
//mongoose.set('useCreateIndex', true);
//mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

app.use('/api/auth', auth);

app.use('/api/products/', products);

app.use('/images', express.static(path.join(__dirname, 'public'))) // !! usefull 4 mum!!  "http://localhost:8080/images/static/r34.jpg"

app.get('/*', (req, res) => {
    //console.dir(req);
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(8080, () => console.log("listening on 8080"))