import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import HeaderText from "../element/TitleText";
import abstractImg from "../../assets/abstract-design.jpg";
import HeroImg from "../../assets/heroImg.png";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import CardSiswa from "../fragment/CardSiswa";
import CardPhotos from "../fragment/CardPhotos";
import SecondaryLogo from "../element/SecondaryLogo";
import retangle11 from "../../assets/Rectangle 11.svg";
import retangle12 from "../../assets/Rectangle 12.svg";
import ReactIco from "../../assets/react.svg";
import jsIco from "../../assets/js.svg";
import htmlIco from "../../assets/html.svg";
import cssIco from "../../assets/css.svg";
import Slider from "react-slick";

const GradientLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#251F17]">
      <div className="px-4 py-2">{children}</div>
      <small className="flex justify-center py-2 text-white">Design and developing By XII PPLG 2</small>
      <hr className="bg-[#FFBD5B] py-1" />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div>
      <div id="Home" className="flex gap-14 flex-col justify-center items-center h-[500px]">
        <div className="absolute bg-[#FFBD5B] blur-[120px] rounded-3xl w-40 h-40 md:w-80 md:h-64"></div>
        <div className="relative z-10 flex items-center gap-2 text-white text-xl md:text-5xl text-center font-bold">
          <div className="relative flex flex-col justify-between gap-10 ">
            <div className="relative left-8 md:left-0">
              <img src={htmlIco} alt="img" className="w-8 md:w-14" />
            </div>
            <div className="relative md:-left-16">
              <img src={jsIco} alt="img" className="w-8 md:w-14" />
            </div>
            <div className="relative left-8 md:left-0">
              <img src={retangle11} alt="img" className="w-8 md:w-14" />
            </div>
          </div>

          <div className="flex flex-col">
            <h1>Welcome To the</h1>
            <span className="p-2 border border-[#FFBD5B] bg-[#FFBD5B] bg-opacity-30">Creative & Collaborative</span>
            <h1>Class</h1>
          </div>

          <div className="relative flex flex-col justify-between gap-10 ">
            <div className="relative -left-8 md:left-0">
              <img src={ReactIco} alt="imgR" className="w-8 md:w-14" />
            </div>
            <div className="relative md:left-16">
              <img src={retangle12} alt="img" className="w-8 md:w-14" />
            </div>
            <div className="relative -left-8 md:left-0">
              <img src={cssIco} alt="img" className="w-8 md:w-14" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mx-auto md:gap-5 ">
          <a href="#About" className="px-3 py-1 rounded-3xl border-2 text-white font-bold flex items-center gap-1 bg-black border-[#FFBD5B] md:text-lg">
            <p>Next</p>{" "}
            <span>
              <HiOutlineArrowNarrowDown />
            </span>
          </a>
          <div className="flex items-center gap-2">
            <a href="https://www.instagram.com/secondary.sgd/" target="_blank" className="p-2 bg-[#FFBD5B] rounded-full hover:bg-white">
              <svg role="img" viewBox="0 0 24 24" width={22} height={22} xmlns="http://www.w3.org/2000/svg">
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
            </a>
            <a href="https://www.instagram.com/secondary.sgd/" target="_blank" className="text-sm md:text-base text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div id="About" className="relative flex flex-col justify-between items-center mb-10 px-4 md:flex-row">
      <div className="absolute bg-[#FFBD5B] blur-[150px] rounded-3xl w-40 h-40 md:w-80 md:h-64"></div>
      <div className="relative z-10 md:w-2/3 text-white">
        <HeaderText text1={"About"} text2={"Our class & major"} />
        <p className="text-lg py-3 w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum, molestias at adipisci architecto eaque unde accusamus eius facilis nulla nam! Repellendus accusamus. </p>
      </div>
      <div className="realtive w-72 h-72 md:w-2/5 md:h-full">
        <img src={HeroImg} alt={"img"} width={500} className="relative z-10" />
        <div className="absolute bottom-0 left[50%] md:right-24 md:top-24 bg-[#FFBD5B] blur-[120px] rounded-3xl w-40 h-40 md:w-80 md:h-64"></div>
      </div>
    </div>
  );
};

const GallerySection = ({data}) => {
  return (
    <div id="Gallery" className="px-4 relative">
      <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] bg-[#FFBD5B] blur-[150px] rounded-3xl w-40 h-40 md:w-80 md:h-64"></div>
      <div className="relative z-10">
        <HeaderText text1={"All the memories"} text2={"we made"} />
        <div className="flex flex-col">
          <Link to={"/gallery"} className="text-sm flex justify-end items-center gap-3 text-white font-light">
            see all memories <HiArrowNarrowRight className="w-6" />
          </Link>
          <div className="grid grid-cols-1 place-items-center gap-12 md:gap-0 md:grid-cols-3">
            {data && data.map((el,i) => <CardPhotos key={i} data={el} scale={(i + 1) === 2 ? 2 : 1} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentSection = () => {
  const [slideView, setSlideView] = useState(0);
  const screenOpt = () => {
    if (window.screen.width > 500) {
      setSlideView(4);
    } else {
      setSlideView(1);
    }
  };

  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slideView,
    slidesToScroll: 1,
    autoplay: true,
  };

  useEffect(() => {
    screenOpt();
  }, [window.screen.width]);

  return (
    <div id="Profile" className="px-4 py-4">
      <HeaderText text1={"Our"} text2={"Profiles"} />
      <div className="flex flex-col">
        <Link to={"/dataSiswa"} className="text-sm flex justify-end items-center gap-3 text-white font-light">
          see all profiles <HiArrowNarrowRight className="w-6 h-8" />
        </Link>
        <div className="w-full px-11 md:px-14 py-4">
          {/* <div className="grid grid-cols-1 gap-14 place-items-center md:gap-0 md:grid-cols-4 py-2"></div> */}
          <Slider {...settings}>
            <CardSiswa />
            <CardSiswa />
            <CardSiswa />
            <CardSiswa />
            <CardSiswa />
            <CardSiswa />
            <CardSiswa />
          </Slider>
        </div>
      </div>
    </div>
  );
};

const FooterSection = () => {
  return (
    <footer className="relative h-[450px] mt-20 text-white flex justify-center items-center flex-col">
      <div className="absolute bg-[#FFBD5B] blur-[150px] rounded-3xl w-40 h-40 md:w-80 md:h-64"></div>
      <div className="relative z-10 flex justify-center items-center flex-col">
        <SecondaryLogo />
        <div className="py-10 text-center md:w-1/2">
          <q className="text-lg md:text-2xl py-6">Collaboration allows us to know more than we are capable of knowing by ourselves.</q>
          <h3 className="text-xl font-medium">-Paul Solarz-</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          <h5>Features</h5>
          <h5>News & Blogs</h5>
          <h5>Careers</h5>
          <h5>Portfolio</h5>
          <h5>Tech</h5>
          <h5>About</h5>
          <h5>Terms</h5>
          <h5>Privacy</h5>
        </div>
      </div>
    </footer>
  );
};

GradientLayout.HeroSection = HeroSection;
GradientLayout.AboutSection = AboutSection;
GradientLayout.GallerySection = GallerySection;
GradientLayout.StudentSection = StudentSection;
GradientLayout.FooterSection = FooterSection;
export default GradientLayout;
