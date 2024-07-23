import React from "react";
import Navbar from "../components/fragment/Navbar";
import GradientLayout from "../components/layout/GradientLayout";

const Home = () => {
  return (
    <GradientLayout>
      <Navbar arrName={["Home", "About", "Gallery", "Profile"]} />
      <GradientLayout.HeroSection />
      <GradientLayout.AboutSection />
      <GradientLayout.GallerySection />
      <GradientLayout.StudentSection />
      <GradientLayout.FooterSection />
    </GradientLayout>
  );
};

export default Home;
