/*const fs=require("fs");const path=require("path");
const os= require("os");

console.log(os.freemem());

const x=fs.readFileSync("./sample.txt","utf-8");
console.log(x);
console.log("read");

const a1="a2";
fs.writeFileSync("./sample2.txt",a1,()=>{
    console.log("written");
});

console.log("i am first");

const a={
    average:(a,b)=>{
       console.log((a+b)/2);
    },
    percent:(a,b)=>{
        console.log((a/b)*100);
     },
};

module.exports = a;*/
const fs=require("fs");
const http= require("http");
const PORT=2000;
const host="localhost";
const home=fs.readFileSync("./index.html","utf-8");

const server=http.createServer((req,res,next)=>{
    
    console.log(req.url);
    return res.end(home);

});

server.listen(PORT,host,()=>{
    console.log("server is running");
});
