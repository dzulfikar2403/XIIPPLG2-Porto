const User = require('../models/users')
const bcrypt = require('bcrypt')
const validator = require("validator")
const jwt = require("jsonwebtoken")

const getUser = async (req,res) => {
  try {
    const getData = await User.find().select('name email').exec()
    if(getData.length === 0){
      res.json("data masih kosong!")
    }else{
      res.json(getData)
    }
  } catch (err) {
    res.json(err)
  }
}

const postUserRegister = async (req,res) => {
  const {name,email,password} = req.body;
  
  try {
    if(!name || !email || !password){
      throw Error("all fields must be fill");
    }

    const checkData = await User.findOne().where("email").equals(email).exec();
    if(checkData){
      throw Error('email already exist');
    }
    
    if(!validator.isEmail(email)){
      throw Error("Invalid email format")
    }
    

    const salt = await bcrypt.genSalt(10);
    const hashPw = await bcrypt.hash(password,salt);

    await User.create({name,email, password: hashPw})
    res.json('succes registered')
  } catch (err) {
    res.json(err.message)
  }
}

const postUserLogin = async (req,res) => {
  const {email,password} = req.body;
  try {
    const emailMatch = await User.findOne().where('email').equals(email).exec();
    if(!emailMatch){
      throw Error('Invalid email or password')
    }

    const MatchingPwCompare = await bcrypt.compare(password,emailMatch.password)
    if(!MatchingPwCompare){
      throw Error('Invalid email or password')
    }

    const token = await jwt.sign({_id:emailMatch._id},process.env.SECRET,{ expiresIn: '1d' });
    res.json({email,token})






    
    
  } catch (err) {
    res.json(err.message)
  } 
}

const updateUser = (req,res) => {
  const {id} = req.params;
  res.send('succes connect put user id ' + id)
}

const deleteUser = async (req,res) => {
  const {id} = req.params;
  try {
    await User.deleteOne().where('_id').equals(id)
    res.send('succes delete user id ' + id) 
  } catch (err) {
    res.send('data id tidak tersedia : ' + err)
  }
}

module.exports = {getUser,postUserRegister,postUserLogin,updateUser,deleteUser}