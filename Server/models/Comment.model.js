const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CommentSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  rating:{type:Number},
  commentby:{type:Schema.Types.ObjectId,ref:"user"},
  date: {
    type: Date,
    default: Date.now,
  },
});

const CommentModel = model("comment", CommentSchema);

module.exports = { CommentModel };

/**
 * text: [{
    type: String,
    required: true,
    bookedby:{type:Schema.Types.ObjectId,ref:"user",required:true}
  }]
 */