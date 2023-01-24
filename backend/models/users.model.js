const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name : {type : String , required : true},
    email : {type : String , required : true , unique : true},
    password : {type : String , required : true},
    role : {type :String}

})

const Users = mongoose.model("user" , userSchema)
module.exports = Users



// {
//     "id":0,   
//    "name": "",
//    "email": "",
//    "password": "",
//    "account": {
//      "cart": [
//        {"id":0,
//          "images": ["", ""],
//          "name": "",
//          "short_desc": "",
//          "long_desc": "",
//          "price": 0,
//          "strike_price": 0,
//          "ratings": 0,
//          "colors":"",
//          "delivery_time": 0,
//          "sizes":"",
//          "quantity":0
//        },
//        {
//          "id":1,
//          "images": ["", ""],
//          "name": "",
//          "short_desc": "",
//          "long_desc": "",
//          "price": 0,
//          "strike_price": 0,
//          "ratings": 0,
//          "colors":"",
//          "delivery_time": 0,
//          "sizes":"",
//          "quantity":0
//        }
//      ],
//      "orders": [{
//          "id":0,
//          "images": ["", ""],
//          "name": "",
//          "short_desc": "",
//          "long_desc": "",
//          "price": 0,
//          "strike_price": 0,
//          "ratings": 0,
//          "colors":"",
//          "delivery_time": 0,
//          "sizes":"",
//          "quantity":0,
//          "address":""
//      }]
//    }
//  }