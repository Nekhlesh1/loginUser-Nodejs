const User = require("../models/user.model.js")

module.exports.createUser = async (req, res) => {
    const { name, email, password } = req.body
    console.log(name, email, password)
    if ((!name) || (!email) || (!password)) {
        res.status(400).json(
            {
                message: "All fields required!"
            })
    }
    const existingUser = await User.findOne({email})
    if(existingUser)
    {
        res.status(400).json({message: "User already exists!"})
    }
    const user =  await User.create({
        name,email,password
    })
    if(!user)
    {
        res.status(500).json({message : "User creation failed!!"})
    }
    res.status(200).json({
        message: "USer created successfully",
        data: user
    })


}
module.exports.updateUserName = async (req, res) => {
    const {email, newName} = req.body
    if(!email)
    res.status(400).json({message : "EMail id required"})
    const user = await User.findOne({email})
    const newUser = await User.findById(user._id)
    console.log(user)
    console.log(user._id)
    console.log(newUser)
    if(!user)
    res.status(400).json({message: "User not found"})
    const updatedDetail = await User.findByIdAndUpdate(user._id, {name: newName},{new: true})
    console.log(updatedDetail)
    res.status(200).json({data : updatedDetail})
    // res.send("update user controller")
}

module.exports.deleteUser = async (req, res) => {
    res.send("delete user")
}