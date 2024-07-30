const mongoose=require("mongoose");
const Chat=require("./Models/chat.js");

main()
.then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Chats');
}

let allchats=[
    {
        from:"Manan",
        to:"Mayank",
        msg:"Hello",
        createdAt:new Date(),
    },
    {
        from:"Manraj",
        to:"Mayank",
        msg:"OO Papajii",
        createdAt:new Date(),
    },
    {
        from:"Virat",
        to:"Rohit",
        msg:"Hum jeet gye",
        createdAt:new Date(),
    },
    {
        from:"Manan",
        to:"Lakhya",
        msg:"We promise to always make fun of sarthak",
        createdAt:new Date(),
    },
];

Chat.insertMany(allchats);

