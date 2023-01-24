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
const cartSchema = new mongoose.Schema({
   delivery_time : {type : Number , default : 3 , required : true},
   image : {type : String , required : true},
   productname : {type : String , required : true},
   price : {type : String,required : true},
   strike_price : {type : Number},
   size : {type : String ,required : true},
   category:{type:String , required:true},
   description:{type : String },
   multi_image:{type:Array},
   quantity : {type : Number , default : 1 , min : 1 , required : true},
   userID : {type : String , required : true}

})
const Carts = mongoose.model("cart" , cartSchema)
module.exports = Carts

// {
//     "delivery_time": 3,
//     "_id": "63c95a6da43da5d36efc582d",
//     "category": "valentine",
//     "id": 1,
//     "image": [
//       "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/192247mpcv4n5ch28x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}"
//     ],
//     "size": "Passport Eligible",
//     "product name": "Sparkle Her Day Red Roses",
//     "description": "The howlidays are here again and we’re celebrating with a bountiful basket of treats and toys. Max and Milo both had fun playing Santa and picking out each one of these pup-approved presents. To start, there’s a stylish plaid bandana and matching bow tie so your dog can look dapper in all your holiday photos. Bring on the festive fun with a plush bone, rope candy cane, and three fetch balls. While everyone’s feasting away on Christmas dinner, canine companions can be snacking away on peanut butter banana treats, carob chip treats, dog nog, a decorative cookie, or peanut butter bone biscuits in a collectable tin. Each treat is baked in the USA with human-grade ingredients and without artificial colors or flavors. Everything arrives in a charming metal and canvas bin with darling pup and truck artwork with the phrase “Home for the Howlidays!",
//     "multi_image": []
//   }