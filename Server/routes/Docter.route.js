const express = require("express")
const { DoctorModel } = require("../models/Doctor.model")


  const DoctorRouter = express.Router()


   DoctorRouter.get("/doctor" , async (req,res) =>{
       try{
         const Doctordata = await DoctorModel.find()
         res.send(Doctordata)
       }
       catch(err){
        console.log(err)
       }
   })

    DoctorRouter.post("/doctor/create",async (req,res) =>{
          const payload = req.body;
         const Doctordata = new DoctorModel(payload)
           await Doctordata.save()
           res.send("userdata Created successfully")
    })

    DoctorRouter.patch("/doctor/:Id" ,async(req,res) =>{
            const Id = req.params.Id
            const payload= req.body;
            try{
                   await DoctorModel.findByIdAndUpdate({_id:Id},payload)
                res.send("user data updated sucessfully")
            }
            catch(err){
              res.send("somethind went wrong")
            } 
    })

    
   DoctorRouter.get("/doctor/:Id" , async (req,res) =>{
    const Id = req.params.Id
    try{
      const Doctordata = await DoctorModel.findById({_id:Id})
      res.send(Doctordata)
    }
    catch(err){
     console.log(err)
    }
})

    DoctorRouter.delete("/doctor/:Id" ,async(req,res) =>{
      const Id = req.params.Id
      try{
             await DoctorModel.findByIdAndDelete({_id:Id})
          res.send("doctor data deleted sucessfully")
      }
      catch(err){
        res.send("somethind went wrong")
      } 
})

   module.exports={
     DoctorRouter
   }