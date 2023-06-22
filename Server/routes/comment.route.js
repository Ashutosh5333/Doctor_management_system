const express = require("express");

const { CommentModel } = require("../models/Comment.model");

const commentRouter = express.Router();

commentRouter.get("/comment", async (req, res) => {
  try {
    const Doctordata = await CommentModel.find().populate("commentby",["name","email"])
                                         
    res.send(Doctordata);
  } catch (err) {
    console.log(err);
  }
});

module.exports={commentRouter}
 