const express=require("express");
const path=require("path");
const app=express();
const port=4000;
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.post("/api/v1/register",(req,res)=>{
    res.send(`<h1>DONE Mr.${req.body.name}</h1>`);
    const username=req.body.name;
});

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});