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
          const {email,password,name} = req.body;

           try{
              const user = await Usermodel.find({email})
           
              if(user.length>0){
                const hasedpassword = user[0].password
            
                const userdata = await Usermodel.find({email})
                 bcrypt.compare(password, hasedpassword, function(err, result) {
                    if(result){
                       const token = jwt.sign({userId:user[0]._id},"hush")
                      res.send({"msg":"loginSucessfull","token":token ,
                       data:{
                         userEmail:userdata[0].email,
                         userName:userdata[0].name
                       }
                    })
                    }
                    else{
                      res.send({ "msg":"Please check password"})
                    }
                });

                }else{
                  res.status(400).send({ "msg": "Email id not registered" });
   
                }
           }
           catch(err){
              res.send({  "msg" :"Something went wrong"})
           }
       })

  




    module.exports={UserRouter}