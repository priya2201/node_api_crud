const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv');
const app=express();
app.use(bodyParser.json());
const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/crud1",{
    useNewUrlParser:true
})

 .then(()=>console.log("mongodb is connected"))

 .catch((err)=>console.log(err))
 
// app.use(cors());
// // app.get('/',(req,res)=>{
// //     res.send("Hello world");
// // });

// // app.get('/employees',(req,res)=>{
// //     res.send("Employees");
// // });

// const connectDB=require('./config/db');
// //load config
// dotenv.config({path: './config/config.env'})
// connectDB();
// //routes
// app.use('/',require('./routes/index'));

require('./models/database')

app.use("/test",(req,res)=>{
    res.send("success")
})

app.listen((process.env.port||3000),function(){
    console.log("express is running on port",(process.env.port||3000))
});

