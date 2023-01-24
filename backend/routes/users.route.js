const express = require("express")
const app = express()
const Users = require("../models/users.model")
app.use(express.json())
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const key = process.env.key


//Signup
app.post("/signup",async(req,res)=>{
    const {name,email,password} = req.body;
    try{
       let existingUser = await Users.findOne({email})
       console.log(existingUser)
       if(existingUser){
        res.send(`User with Email Id ${email} already exist`)
       }
       else{
        bcrypt.hash(password, 5, async(err, secure_password)=> {
            if(err){
                res.send(err)
            }else{
                let createUser = new Users({ name : name ,email : email , password : secure_password, role : "Explorer"})
                await createUser.save()
                res.send("Signup Successfully")
                // res.send(createUser)
            }
            
        });
       
       }
    }catch(e){
        console.log(e.message)
        res.send(e.message)
    }
})

//Login
app.post("/login",async(req,res)=>{
   const {email , password} = req.body;
   try{
    let user = await Users.findOne({email})
    console.log(user)
    if(user){
        bcrypt.compare(password, user.password, (err, result)=> {
            if(result){
                let token = jwt.sign({id : user._id , role : user.role , email : user.email , name : user.name},key)
                res.send({msg : "Login Success" , flowerToken : token , userData: {name : user.name , role : user.role , id : user.id } })
            }else{
                res.send("Wrong Credentials")
                
            }
        });
    }
    else{
        res.send(`User does not exist with Email Id ${email}`)
    }

   }catch(e){
        console.log(e.message)
        res.send(e.message)
    }
})

module.exports = app