const express = require('express')
const router = express.Router()
const User=require('./model/userSchemax')

router.post('/',(req, res) => {
    try{
    const {name,email,password} = req.body;
    const newUser=new User({name,email,password});
    newUser.save();
    res.status(200).send(
    {message:'User  Created,newUser'});
  }catch(err){
    res.status(500).send(
        {message:err.message});
  }
})

module.exports = router;   //post data


//get data

router.get('/',async(req, res) => {
  try{
  const data=await User.find()
  res.status(200).send(data);
}catch(err){
  res.status(500).send(
      {message:err.message});
}
})

//put or update data
router.put('/',async(req, res)=>{
  try{
    const {newPassword}=req.body;
    const userId=req.params.id;
    const updateQuery=await User.updateOne({_id:userId},{$set:{newPassword}})
    
    if(updateQuery.nModified===0)
      {
        res.status(400).send({message:"id not present "})
      }
      res.status(201).send({message:"Password updated "})
  }catch(err){
    res.status(500).send(
    {message:err.message});
  }
})

