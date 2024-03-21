const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log(`connected to db successfully`)
}).catch((err)=>{
    console.log(`error connedcting to database${err}`)
})