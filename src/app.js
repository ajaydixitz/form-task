const express=require('express');
const port=3000;
const app=express();

require("./db/conn")
app.use(express.json());
app.use(express.urlencoded({extened:false}));
app.set("view engine","ejs");
const User=require("./models/schema");


app.get("/home",(req,res)=>{
    res.render("home");
})
app.get("/signup",(req,res)=>{
    res.render("signup");
})
app.get("/login",(req,res)=>{
res.render("login")
})
app.post("/register",(req,res)=>{
console.log(req.body);
const user=new User(req.body);
user.save();
res.redirect("/home");
})
app.get("/details",async(req,res)=>{
    try{
        const em=req.query.email;
        const pd=req.query.password;
        const user= await User.find({password:pd,email:em});
        console.log(user);
        res.render("details",{user:user});
    }catch{
        res.send(e);
    }
});
app.get("/resetpass",(req,res)=>{
    res.render("reset");
})
app.patch("/update",(req,res)=>{
    const em=req.body.email;
    const pass=req.body.password;
    const cpass=req.body.cpassword;
    if(cpass==pass)
    {
        const user= User.findOneAndUpdate({email:em,password:pass});
res.send(` <h1> password updated </h1>`);
    }
else{
    res.send(` <h1> password is not match </h1>`)
}
})
app.listen(port,()=>{
    console.log("port is running on 3000");
})