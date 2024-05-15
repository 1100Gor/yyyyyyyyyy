// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import {app} from "./app.js";
import connectDB from "./db/index.js"
dotenv.config({
    path: './.env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Sever at running at PORT: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed!!!",err)
})


















/*
;(async()=>{
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    try {
        app.on("error",(error)=>{
        console.log("Error: ",error);
        throw error;
    })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listing at PORT : ${PORT}`)
        })
        
    } catch (error) {
        console.log("Error: ",error);
        throw error;
    }
})()*/