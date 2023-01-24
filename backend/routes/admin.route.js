const express = require("express")
const app = express.Router()
app.use(express.json())
const Products = require("../models/product.model")
const Users = require("../models/users.model")
const Carts = require("../models/cart.model")

// Get All Products

app.get("/products",async(req,res)=>{
    try{
     let products = await Products.find()
    if(products.length>0){
        res.send(products)
    }else{
        res.send("There is no Product")
    }
    }catch(e){
        res.send(e.message)
    }
})

app.post("/products",async(req,res)=>{
    try{
        let createProduct = new Products(req.body)
        await createProduct.save()
        res.send({msg:"Product has created"})

    }catch(e){
        res.send(e.message)
    }
})

app.patch("/products/:id",async(req,res)=>{
    let id = req.params.id;
    try{
       let findProduct = await Products.findById(id)
       if(findProduct){
        let productUpdate = await Products.findByIdAndUpdate(id , req.body , {new:true})
       res.send("Product has updated")
       }
       else{
        res.send("Product not found")
       }

    }catch(e){
        res.send(e.message)
    }
})

app.delete("/products/:id",async(req,res)=>{
    let id = req.params.id;
    try{
       let findProduct = await Products.findById(id)
       if(findProduct){
        let productDelete = await Products.findByIdAndDelete(id)
       res.send("Product has Deleted")
       }
       else{
        res.send("Product not found")
       }

    }catch(e){
        res.send(e.message)
    }
})

//Users
app.get("/users",async(req,res)=>{
    try{
     let users = await Users.find()
     if(users.length>0){
        res.send(users)
     }else{
        res.send("No User Found")
     }
    }catch(e){
        res.send(e.message)
    }
})

app.delete("/users/:id" ,async(req,res)=>{
    let id = req.params.id ;
    try{
        let user = await Users.findById(id)
        if(user){
            let deleteUser = await Users.findByIdAndDelete(id)
            res.send("User has been deleted")
        }
        else{
            res.send("User Not Found")
        }
       }catch(e){
           res.send(e.message)
       }
})

module.exports = app;
