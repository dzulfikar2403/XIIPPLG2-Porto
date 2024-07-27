import React, { useEffect, useState } from 'react'
import GridLayout from '../components/layout/GridLayout'
import axios from 'axios'
import CardSiswa from '../components/fragment/CardSiswa';

const SiswaPage = () => {
  const [siswa,setSiswa] = useState(null); 
  const fetchData = async () => {
    const res = await axios.get('http://localhost:3000/siswa/')
    
    setSiswa(res.data);
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <GridLayout title={'Profile'}>
      {siswa && siswa.map((el,i) => <CardSiswa key={i} data={el}/>)}
    </GridLayout>
  )
}

export default SiswaPage