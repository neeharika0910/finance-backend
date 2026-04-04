const Record = require("../models/Record");

exports.create = async(req,res)=> res.json(await Record.create({...req.body,userId:req.user.id}));
exports.get = async(req,res)=>{
  let f={userId:req.user.id};
  if(req.query.type) f.type=req.query.type;
  if(req.query.category) f.category=req.query.category;
  res.json(await Record.find(f));
};
exports.update = async(req,res)=> res.json(await Record.findByIdAndUpdate(req.params.id,req.body,{new:true}));
exports.delete = async(req,res)=>{ await Record.findByIdAndDelete(req.params.id); res.json({msg:"Deleted"}); };
