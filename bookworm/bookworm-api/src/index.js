import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import auth from './routes/auth'
import signup from './routes/signup'
import confirm from './routes/confirm'
import forgot from './routes/forgot';
import bookSearch from './routes/bookSearch';
import updatePassword from './routes/updatePassword';
import validatePasswordToken from './routes/validatePasswordToken'
import resetPassword from './routes/resetPassword';
import bodyParser from 'body-parser'
import dotenv from "dotenv";
import Promise from 'bluebird';

dotenv.config();

const app = express();
app.use(bodyParser.json())
mongoose.Promise = Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

app.use('/api/auth', auth);

app.use('/api/signup', signup);

app.use('/api/confirm', confirm);

app.use('/api/forgot', forgot);

app.use('/api/validate', validatePasswordToken);

app.use('/api/reset', resetPassword)

app.use('/api/updatepassword', updatePassword)

app.use('/api/books', bookSearch)

app.use('/images', express.static(path.join(__dirname, 'public'))) // !! usefull 4 mum!!

app.get('/*', (req, res) => {
    //console.dir(req);
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(8080, () => console.log("listening on 8080"))