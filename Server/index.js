const express = require("express");
const { connection } = require("./config/db");
const { UserRouter } = require("./routes/User.route");

 

 const app = express()
 app.use(express.json());

   app.get("/", (req,res) =>{
        res.send("Welcome home ")
   })


   app.use(UserRouter)

 app.listen(8000,async (req,res) =>{
       try{
          await connection
          console.log("connected to database")
       }catch(err){
          console.log("comething went wrong in connected")
          console.log(err)
       }
      console.log("listening on port 8000")
 })