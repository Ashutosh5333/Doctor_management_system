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






module.exports = { AppointmentRouter };
