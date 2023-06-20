 
  const express = require("express");
const { AdminModel } = require("../models/Adminmodel");

  
  
     const AdminRouter= express.Router()
  
  
      AdminRouter.post("/admin" , async (req,res) =>{
        const {email,password} = req.body;
         const user = await AdminModel.find()
        try{
             if(user[0].email == email && user[0].password ==password ){
  
               res.send({"msg":"Loginsucessfull", data:user})
             }else{
              res.send({"msg":"Invalid credentails"})
             }
        }catch{
          //  console.log(err)
          res.send({"msg":"Invalid credentails"})
        }
   
      })
  
  
      AdminRouter.post("/admin/create", async (req,res) =>{
           const {email,password} = req.body;
  
            try{
               const  Newuser = new AdminModel({email,password})
                await  Newuser.save()
                res.send({"msg":"Signup sucessfully" }) 
            }
            catch(err){
              console.log(err)
              res.send({"msg":"Invalid Credetials"})
            }
  
      })
  
      module.exports={AdminRouter}