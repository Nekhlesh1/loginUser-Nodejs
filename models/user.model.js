const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken')

const userScehma = new mongoose.Schema(
    {
        name : 
        {
            type : String,
            required: true,
            
        },   
        email : 
        {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,

        }
    },
    {
        timestamps: true
    })

userScehma.pre('save', async function(next) {
    if(!this.isModified('password'))
    {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

    module.exports  = mongoose.model('User',userScehma)