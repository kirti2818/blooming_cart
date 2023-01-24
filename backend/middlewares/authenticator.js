const express = require("express")
const jwt = require("jsonwebtoken")
const key = process.env.key
const authenticator = async(req,res,next)=>{
    // res.send("hi")
    let token = req.headers.authorization
    // console.log({token});
    // res.send(token)
    if(!token){
        res.send("Token is Missing Please Login First")
    }
    else{
        try{
           let verification = jwt.verify(token , key)
           if(verification){
            // res.send(verification)
            req.body.userID = verification.id
            next()
           }else{
            res.send("Please Login First")
           }
        }catch(e){
            res.send(e.message)
        }

    }
  
}
module.exports = authenticator