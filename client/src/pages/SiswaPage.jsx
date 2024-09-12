import React, { useEffect, useState } from 'react'
import GridLayout from '../components/layout/GridLayout'
import CardSiswa from '../components/fragment/CardSiswa';

const SiswaPage = () => { 
  const { dataSiswa } = useSelector((state) => state.siswaSlice);

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <GridLayout title={'Profile'}>
      {dataSiswa && dataSiswa?.map((el,i) => <CardSiswa key={i} data={el}/>)}
    </GridLayout>
  )
}

export default SiswaPage