const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: Number,
  type: { type: String, enum: ["income","expense"] },
  category: String,
  date: { type: Date, default: Date.now },
  notes: String
});

module.exports = mongoose.model("Record", schema);
