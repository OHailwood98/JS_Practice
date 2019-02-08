import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import auth from './routes/auth'
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.json())
mongoose.connect("mongodb://localhost/bookworm", { useNewUrlParser: true });

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

/** app.post("/api/auth", (req, res) =>{
    console.log(req);
    res.status(400).json({errors: {global: "invalid cred"}})
})*/

app.use('/api/auth', auth);

app.listen(8080, () => console.log("listening on 8080"))