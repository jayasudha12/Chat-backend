const express = require("express");
const mongoose =  require('mongoose');
const body_parser = require('body-parser')

const app = express();

app.use(body_parser.json());
app.use(require("cors")());

const port = process.env.PORT || 8000
async function connectToDB(){
    try{
    await mongoose.connect(`mongodb+srv://jayasudhat2022cse:2J47zICqpicv4CXg@cluster05.olvpemp.mongodb.net/ChatApplication?retryWrites=true&w=majority&appName=Cluster05`)
    console.log("Database Connection Established......")
    app.listen(port,function(){
        console.log(`listening on ${port}.....`)
    })
}
catch(error){
    console.log(error)
    console.log("Couldn't Establish connection")
}
}
connectToDB()