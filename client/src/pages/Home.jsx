import React, { useEffect, useState } from "react";
import Navbar from "../components/fragment/Navbar";
import GradientLayout from "../components/layout/GradientLayout";
import { useDispatch, useSelector } from "react-redux";
import { galleryDisplay, getGallery } from "../redux/reducer/gallerySlice";
import { getDataSiswa, siswaDisplay } from "../redux/reducer/siswaSlice";

const Home = () => {
  const dispatch = useDispatch();
  const {gallery, isError, isLoading} = useSelector(state => state.gallerySlice)
  const {dataSiswa, isError: errSiswa, isLoading: loadSiswa} = useSelector(state => state.siswaSlice)

  useEffect(()=>{
    dispatch(getGallery());
    dispatch(getDataSiswa());
  },[])

  useEffect(()=>{
    if(gallery.length > 0 && dataSiswa.length > 0){
      dispatch(galleryDisplay())
      dispatch(siswaDisplay())
    }
  },[dataSiswa.length,gallery.length])

  return (
    <GradientLayout>
      <Navbar arrName={["Home", "About", "Gallery", "Profile"]} />
      <GradientLayout.HeroSection />
      <GradientLayout.AboutSection />
      <GradientLayout.GallerySection data={gallery} isLoading={isLoading} isError={isError} />
      <GradientLayout.StudentSection data={dataSiswa} isLoading={loadSiswa} isError={errSiswa} />
      <GradientLayout.FooterSection />
    </GradientLayout>
  );
};

export default Home;
