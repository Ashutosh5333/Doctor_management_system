const express = require("express");
const { DoctorModel } = require("../models/Doctor.model");
const { Usermodel } = require("../models/User.model");
const { CommentModel } = require("../models/Comment.model");
const { Authenticate } = require("../middleware/Authenticate");

const DoctorRouter = express.Router();

DoctorRouter.get("/doctor", async (req, res) => {
  try {
    const Doctordata = await DoctorModel.find().populate("bookedby",["name","email"])
                                            .populate("comments")
                                    
    res.send(Doctordata);
  } catch (err) {
    console.log(err);
  }
});
 

DoctorRouter.post("/doctor/create", Authenticate, async (req, res) => {
  const payload = req.body;
  const userId = req.body.userId;
  try {
    const bookedappoinment = await DoctorModel.create({
      ...payload,
      bookedby: userId,
    });
    await bookedappoinment.save();
    res.send({ msg: "Doctor data created Succesfully" });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

DoctorRouter.patch("/doctor/:Id", async (req, res) => {
  const Id = req.params.Id;
  const payload = req.body;
  try {
    await DoctorModel.findByIdAndUpdate({ _id: Id }, payload);
    res.send("user data updated sucessfully");
  } catch (err) {
    res.send("somethind went wrong");
  }
});

DoctorRouter.get("/doctor/:Id", async (req, res) => {
  const Id = req.params.Id;
  try {
    const Doctordata = await DoctorModel.findById({ _id: Id });
    res.send(Doctordata);
  } catch (err) {
    console.log(err);
  }
});

DoctorRouter.delete("/doctor/:Id", async (req, res) => {
  const Id = req.params.Id;
  try {
    await DoctorModel.findByIdAndDelete({ _id: Id });
    res.send("doctor data deleted sucessfully");
  } catch (err) {
    res.send("somethind went wrong");
  }
});


   //  ------------------ Comment  ------------------ //

   DoctorRouter.post("/comments/:id", Authenticate, async (req, res) => {
      const userId = req.body.userId
    try {
   
      const post = await DoctorModel.findById(req.params.id).populate("comments");
      const user = await Usermodel.findById(userId);
          //  console.log(user)
    
      if (!post) return res.status(404).send("Post not found");
  
      const comment = new CommentModel({
        user: user._id,
        rating:req.body.rating,
        text: req.body.text,
        name: user.name,
      });
  
   
      await comment.save();
  
      post.comments.unshift(comment);
      await post.save();
  
      res.send({ msg: "Comment added successfully", comments: post.comments });
    } catch (error) {
      console.log(error);
      res.status(400).send("Internal Server error");
    }
  });
  




module.exports = {
  DoctorRouter,
};
