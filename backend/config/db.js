const mongoose = require("mongoose")

const connect = ()=>{
    return mongoose.connect(process.env.db_url)
}

module.exports = connect;