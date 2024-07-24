import React, { useEffect, useState } from 'react'
import GridLayout from '../components/layout/GridLayout'
import axios from 'axios';
import CardPhotos from '../components/fragment/CardPhotos';

const GallerryPage = () => {
  const [dataGallery,setGallery] = useState(null);

  const getDataGallery = async () => {
    const resData = await axios.get('http://localhost:3000/gallery/');

    // console.log(resData);
    setGallery(resData.data)
  }

  useEffect(() => {
    getDataGallery()
  },[])

  return (
    <GridLayout title={"Gallery"}>
      {dataGallery && dataGallery.map((el,i) => <CardPhotos key={i} data={el}/>)}
    </GridLayout>
  )
}

export default GallerryPage