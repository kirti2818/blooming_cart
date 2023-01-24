const express = require("express")
const app = express()
app.use(express.json())
const Products = require("../models/product.model")
const authenticator = require("../middlewares/authenticator")

// app.post("/",async(req,res)=>{
//     let pro = new Products(req.body)
//     await pro.save()
//     res.send(pro)
// })


//Get All Products

app.get("/" , async(req,res)=>{
    const query = req.query
    const {limit=12 , page=1} = req.query
    console.log(limit , page)
    try{
      const allProducts = await Products.find(query).limit(limit).skip((page-1)*limit)
      res.send(allProducts)

    }catch(e){
        res.send(e.message)
    }
})

//Get SingleProduct

app.get("/:id" , authenticator,async(req,res)=>{
    let id = req.params.id
    try{
        let product = await Products.findById(id)
        res.send(product)

    }catch(e){
        res.send(e.message)
    }
})
module.exports = app;
