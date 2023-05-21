const mongoose =require('mongoose');
const User =require('../models/userSchema');

exports.get=async(req,res)=>{
    const user =await User.find();
    res.status(200).json(user);
}
exports.create=async(req,res)=>{

    const {userName,email,phone}=req.body;
    const user=new User({
      userName,email,phone
    });
    await user.save();
    res.status(200).json(user);
}
exports.update=async(req,res)=>{
    const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(user);
}
exports.del=async(req,res)=>{
  const user =await User.findByIdAndDelete(req.params.id);
  res.json(user);
}