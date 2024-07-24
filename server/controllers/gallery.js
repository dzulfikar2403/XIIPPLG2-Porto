const Gallery = require('../models/gallery');

const getData = async (req,res) => {
  try {
    const resData = await Gallery.find().exec()
    res.json(resData)
  } catch (err) {
    res.json(err)
  }
}

const postData = async (req,res) => {
  const {name,dateEvent,description} = req.body;
  const files = req.files;
  const arrFiles = files.map(el => el.filename)

  const maxFile = 3;
  if(files.length > maxFile){
    res.json("maximal file 3")
  }

  try {
    await Gallery.create({thumbnail: arrFiles[0],images: arrFiles,name,dateEvent,description});
    res.json('succes post data')
  } catch (err) {
    res.json(err)
  }
}
 
const deleteData = async (req,res) => {
  const {id} = req.params;

  await Gallery.deleteOne().where('_id').equals(id).exec();
}

module.exports = {getData,postData,deleteData}