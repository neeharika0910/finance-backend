const Record = require("../models/Record");
const mongoose = require("mongoose");

exports.summary = async(req,res)=>{
  const uid = new mongoose.Types.ObjectId(req.user.id);

  const income = await Record.aggregate([
    {$match:{userId:uid,type:"income"}},
    {$group:{_id:null,total:{$sum:"$amount"}}}
  ]);

  const expense = await Record.aggregate([
    {$match:{userId:uid,type:"expense"}},
    {$group:{_id:null,total:{$sum:"$amount"}}}
  ]);

  const ti = income[0]?.total||0;
  const te = expense[0]?.total||0;

  res.json({totalIncome:ti,totalExpenses:te,netBalance:ti-te});
};
