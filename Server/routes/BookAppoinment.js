const express = require("express");
const { AppointmentModel } = require("../models/BookAppoinment.model");
const { Authenticate } = require("../middleware/Authenticate");
const AppointmentRouter = express.Router();


AppointmentRouter.get("/allappoinment", async (req, res) => {
  try {
    const Appoinmentdata = await AppointmentModel.find().populate("bookedby", [
      "name",
      "email",
    ]);
    res.send(Appoinmentdata);
  } catch (err) {
    console.log(err);
  }
});


AppointmentRouter.get("/myappoinment",Authenticate, async (req, res) => {
  const userId = req.body.userId;
  try {
    const MyAppoinmnet = await AppointmentModel.find({
      userId: userId,
    }).populate("bookedby", ["name", "email"]);
    res.send(MyAppoinmnet);
  } catch (err) {
    res.send(err);
  }
});


AppointmentRouter.post("/book/appoinment", Authenticate, async (req, res) => {
  const payload = req.body;
  const userId = req.body.userId;

  try {
    const bookedappoinment = await AppointmentModel.create({
      ...payload,
      bookedby: userId,
    });
    await bookedappoinment.save();
    res.send({ msg: "Appoinment booked Succesfully" });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});


AppointmentRouter.patch("/appoinment/edit/:prodId",Authenticate, async (req, res) => {
  const prodId = req.params.prodId;
  const userId = req.body.userId;
  const payload = req.body;
  try {
    const Appoinmnetdata = await AppointmentModel.findOne({ _id: prodId });
    if (userId !== Appoinmnetdata.userId) {
      res.send("you are not authorized");
    } else {
      const Appoinmnet = await AppointmentModel.findByIdAndUpdate(
        { _id: prodId },
        payload
      );
      res.send({ msg: "data updated sucessfully" });
    }
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrongs" });
  }
});


    // ------------- Delete req ------------ //


AppointmentRouter.delete("/appoinment/delete/:prodId", Authenticate ,async (req, res) => {
  const prodId = req.params.prodId;
  const userId = req.body.userId;

  try {
    const Appoinmnetdata = await AppointmentModel.findOne({ _id: prodId });
    if (userId !== Appoinmnetdata.userId) {
      res.send("you are not authorized");
    } else {
      await AppointmentModel.findOneAndDelete({ _id: prodId });
      res.send({ msg: "post Deleted sucessfully" });
    }
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrongs" });
  }
});


//  ------------------- Admin  approved   -------------// 


AppointmentRouter.put("/status/:id",async(req,res)=>{
  const id=req.params.id;
try {
  const Appoinmnet = await AppointmentModel.findById(id)
  if (!Appoinmnet) {
    res.send({ msg: 'project not found' });
  } else {
      const {Status}=req.body
      Appoinmnet.Status= Status
    await Appoinmnet.save();
    res.send({ msg: 'Appoinment updated successfully' });
  }
} catch (err) {
  res.send({msg:"Error in updating Appoinmnet data,try again"});
}
})

  
 // ------------------- 


 AppointmentRouter.get("/countAppointment",async(req,res)=>{ 
  try{
     const data ={}
     data.totalAppiontment=await AppointmentModel.countDocuments();
     data.NewAppoinment=await AppointmentModel.countDocuments({Status:"Registered"});
     data.Waiting=await AppointmentModel.countDocuments({Status:"Waiting"});
     data.Approved=await AppointmentModel.countDocuments({Status:"Approved"});

   return res.status(200).send({data:data})
  }catch(err){
    res.send({msg:"Erroe in getting data"})
  }
})


      //  ------------- chart data ---------------- 

      AppointmentRouter.get("/chartdata",async(req,res)=>{ 
    try{
       const Closed = await AppointmentModel.aggregate([{$match:{Status:"Approved"}},
       {$group: {_id:"$Doctor",Closedcount:{$sum:1}}},
       {$sort:{_id:1}}
      ])
       const Total = await AppointmentModel.aggregate([{$group:{_id:"$Doctor",TotalCount:{$sum:1}}},
       {$sort:{_id:1}}
      ])
      res.send({Closed:Closed,Total:Total})
    }catch(err){
      res.send({msg:"Erroe in getting data"})
    }
  })




module.exports = { AppointmentRouter };
