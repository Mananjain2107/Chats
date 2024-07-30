const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./Models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main()
.then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Chats');
}

let chat1=new Chat({
    from:"Manan",
    to:"Mayank",
    msg:"Hello",
    createdAt:new Date(),
});

chat1.save();

app.get("/",(req,res)=>{
    res.send("root is working");
})
app.listen(8080,()=>{
    console.log("Server is working");
})