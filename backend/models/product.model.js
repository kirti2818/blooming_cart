// {   
//     "id":0,
//     "images":["" , ""],
//     "name":"",
//     "short_desc":"",
//     "long_desc":"",
//     "price":0,
//     "strike_price":0,
//     "ratings":0,
//     "colors":"green",
//     "delivery_time":3,
//     "sizes":""
const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
   image : {type : String , required : true},
   productname : {type : String , required : true},
   price : {type : String,required : true},
   strike_price : {type : Number},
   delivery_time : {type : Number , default : 3},
   size : {type : String ,required : true},
   category:{type:String , required:true},
   description:{type : String , required : true},
   multi_image:{type:Array}

})
const Products = mongoose.model("product" , productSchema)
module.exports = Products