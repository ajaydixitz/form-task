const mongoose=require('mongoose');
const userschema=new mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    email:{type:String},
    password:{type:String}
})
const User= mongoose.model("User",userschema);
module.exports=User;