const jwt = require("jsonwebtoken");
const User = require('../models/users')


var isLogin = (req, res, next) => {
    console.log('masuk auth nih')
    let token = req.headers.token
    console.log('token auth==>',token);
    
    let decode = jwt.verify(token, process.env.JWT_TOKEN)
    console.log("ini dari auth",token)
    console.log("ini env secret",process.env.JWT_TOKEN)
    if(token){
        User
        .findOne({
            email: decode.email
        })
        .then((data) => {
            console.log(data);
            
            if(data){
                next()
            }else{
                console.log('masuk else')
                res.status(400).json({
                    message: err.message
                })
            }
        }).catch((err) => {
            console.log('masuk catch')
            res.status(400).json({
                message: 'User must be Log In'
            })
        });
        
    }else{
        res.status(400).json({
            msg: 'User must be Log In'
        })
    }
}

module.exports = isLogin


