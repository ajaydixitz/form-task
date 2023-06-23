const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1/task",{useNewurlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Data Base connected ")
}).catch((e)=>{
    console.log(e);
})