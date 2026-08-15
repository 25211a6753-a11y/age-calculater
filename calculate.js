const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors())
app.use(express.json());
app.post("/age",(req,res)=>{

    console.log("REQUEST RECEIVED");
    console.log(req.body);
    const dob=new Date(req.body.dob);
    const today=new Date();
    let age=today.getFullYear()-dob.getFullYear();
    const month=today.getMonth()-dob.getMonth();
    if(month<0||(month===0&&today.getDate()<dob.getDate())){
        age--;
    }
    res.json({
          dateofBirth:req.body.dob,
          age:age
    });
});
app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
});