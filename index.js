const express = require('express')
const app = express()
const port  = 3000
const db = require('./db/db.js')

app.use(express.json())


app.use("/user",require('./routes/routes.js'))



app.listen(port, (err)=>{
    if(err)
    {
        console.log(`error occured ${err}`)
    }
    console.log(`Connected to port number : ${port}`)
})

