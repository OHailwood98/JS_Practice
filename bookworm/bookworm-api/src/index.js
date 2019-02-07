import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

const app = express();

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post("/api/auth", (req, res) =>{
    //console.log(req);
    res.status(400).json({errors: {global: "invalid cred"}})
})

app.listen(8080, () => console.log("listening on 8080"))