const User = require('../models/users')
const bcrypt = require('bcrypt')

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
    await User.create({name,email,password})
    res.json('succes registered')
  } catch (err) {
    res.json('Email sudah ada yang pakai ' +err)
  }
}

const postUserLogin = async (req,res) => {
  const {email,password} = req.body;
  try {
    const emailMatch = await User.findOne().where('email').equals(email).exec();
    if(!emailMatch){
      res.json('Invalid email or password')
    }

    const MatchingPwCompare = await bcrypt.compare(password,emailMatch.password)
    if(!MatchingPwCompare){
      res.json('Invalid email or password')
    }else{
      res.json('success')
    }
  } catch (err) {
    res.json(err)
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