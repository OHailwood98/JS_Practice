import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import auth from './routes/auth'
import signup from './routes/signup'
import bodyParser from 'body-parser'
import dotenv from "dotenv";
import Promise from 'bluebird';

dotenv.config();

const app = express();
app.use(bodyParser.json())
mongoose.Promise = Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

/** app.post("/api/auth", (req, res) =>{
    console.log(req);
    res.status(400).json({errors: {global: "invalid cred"}})
})*/

app.use('/api/auth', auth);

app.use('/api/signup', signup);

app.listen(8080, () => console.log("listening on 8080"))