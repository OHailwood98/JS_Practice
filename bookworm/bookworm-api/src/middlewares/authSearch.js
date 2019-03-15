import jwt from 'jsonwebtoken'
import User from '../models/user'

function authSearch(req, res, next){
    const header = req.headers.authorisation;
    var token;

    if(header) token= header.split(' ')[1]

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>{
            if(decoded){
                User.findOne({email: decoded.email}).then( user=>{
                    req.currentUser = user;
                    next();
                })
            }else{
                res.status(401).json({errors: {global: "Verification Token Invalid"}})
            }
        })

    }else{
        res.status(401).json({errors: {global: "No Verification Token"}})
    }
}

export default authSearch;