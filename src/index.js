
// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})



connectDB()

















// connectDB() 
// import express from "express" 

// const app = express = "express"

// ;( async () => {

//     try {
//        await   mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error" ,() => {
//         console.log("Err:" ,error)
//         throw error 
//        })

//        app.listen(process.env.PORT ,() => {
//         console.log(`App is listening on port $
//         {proccess.env.PORT}`);
//        })
//     } catch (error) {
//         console.error("ERROR" ,error)
//         throw err
//     }
// })()