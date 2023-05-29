 const express = require("express");
const { Usermodel } = require("../models/User.model");

  const UserRouter = express.Router();


    UserRouter.get("/sign", async (req,res) =>{
           res.send("Hello Signup")
        //  console.log("hello singup ")
    })

    UserRouter.post("/signup",async (req,res) =>{
       const {email,password ,name} = req.body

        const useravailable = await Usermodel.findOne({email})
       
          if(useravailable){
            res.send("user is already preasent")
            return
          }
          try{
             const  NewUser = new Usermodel({email,password,name})
              await NewUser.save()
              res.send("Signup Sucessfully")
          }
          catch(err){
            console.log(err)
            res.send("Something went wrong")
          }

      })


       UserRouter.post("/login", async (req,res) =>{
          const {email,password} = req.body;

           try{
              const user = await Usermodel.find({email})

                if(user.length>0){
                   res.send({"msg":"loginSucessfull"})
                }else{
                  res.send("Please check email and password")
                }
           }
           catch(err){
              res.send("Something went wrong")
           }

       })




    module.exports={UserRouter}