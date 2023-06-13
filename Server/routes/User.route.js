 const express = require("express");
const { Usermodel } = require("../models/User.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { Authenticate } = require("../middleware/Authenticate");
const UserRouter = express.Router();


    UserRouter.get("/signdata", async (req,res) =>{
         const userdata = await Usermodel.find()
         res.send(userdata)
           
    })
 
    UserRouter.post("/signup",async (req,res) =>{
       const {email,password ,name} = req.body

        const useravailable = await Usermodel.findOne({email})
       
          if(useravailable){
            res.send("user is already preasent")
            return 
          }
          try{
            bcrypt.hash(password, 4, async function(err, hash) {
             
              const  NewUser = new Usermodel({email,password:hash,name})
              await NewUser.save()
              res.send("Signup Sucessfully") 
          });
          
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
             const hasedpassword = user[0].password
              if(user.length>0){
                 bcrypt.compare(password, hasedpassword, function(err, result) {
                    if(result){
                       const token = jwt.sign({userId:user[0]._id},"hush")
                      res.send({"msg":"loginSucessfull","token":token})
                    }
                    else{
                      res.send({ "msg":"Please check password"})
                    }
                });

                }else{
                  res.send("Please check email and password")
                }
           }
           catch(err){
              res.send("Something went wrong")
           }
       })

       UserRouter.get("/pro", Authenticate, (req,res) =>{       
              res.send("hello product page")

       })




    module.exports={UserRouter}