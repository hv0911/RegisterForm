const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const User = new mongoose.model("User",UserSchema);


exports.registerUser = async(req,res)=>{

  const user = await User.create(req.body);

    res.json(
        {
            success: true,
            name:user.name,
            email:user.email,
            password:user.password

        } );
};