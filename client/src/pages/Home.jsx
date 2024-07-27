import React, { useEffect, useState } from "react";
import Navbar from "../components/fragment/Navbar";
import GradientLayout from "../components/layout/GradientLayout";
import axios from "axios";

const Home = () => {
  const [thumbnail, setThumbnail] = useState();
  const [siswa,setSiswa] = useState(null); 
  const getDataGallery = async () => {
    const res = await axios.get("http://localhost:3000/gallery");
    const slice3 = res.data.slice(0, 3);

    setThumbnail(slice3);
  };

  const fetchData = async () => {
    const res = await axios.get('http://localhost:3000/siswa/')
    
    setSiswa(res.data);
  }

  useEffect(() => {
    getDataGallery();
    fetchData();
  }, []);


  return (
    <GradientLayout>
      <Navbar arrName={["Home", "About", "Gallery", "Profile"]} />
      <GradientLayout.HeroSection />
      <GradientLayout.AboutSection />
      <GradientLayout.GallerySection data={thumbnail}/>
      <GradientLayout.StudentSection data={siswa} />
      <GradientLayout.FooterSection />
    </GradientLayout>
  );
};

export default Home;
