import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import SecondaryLogo from "../element/SecondaryLogo";

const Navbar = ({ arrName }) => {
  const [toggle, setToggle] = useState(false);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const blurNav = () => {
    if (window.scrollY > 0) {
      setBlur(true);
    } else {
      setBlur(false);
    }
  };

  window.addEventListener("scroll", blurNav);

  return (
    <nav className={blur ? "fixed top-0 right-0 left-0 px-4 py-2 backdrop-blur-sm z-50" : "fixed top-0 right-0 left-0 px-4 py-2"}>
      {window.screen.width <= 500 ? (
        <div className="flex justify-between items-center">
          <SecondaryLogo />
          <span onClick={() => setToggle((pre) => !pre)}>{toggle ? <HiX className="w-6 h-8 text-white" /> : <HiMenuAlt3 className="w-6 h-8 text-white" />}</span>
          {toggle && (
            <div className="absolute top-10 right-5 bg-white w-40 h-40 rounded-lg flex justify-center items-center flex-col" data-aos="fade-left">
              <ul>
                {arrName.map((el, i) => (
                  <li key={i} className="list-disc list-outside mb-2">
                    <a href={`#${el}`}>{el}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="sticky top-0">
          <div className="flex justify-between items-center ">
            <SecondaryLogo />
            <div className="flex items-center gap-10 text-white">
              {arrName.map((el, i) => (
                <a key={i} href={`#${el}`} className="hover:border-b hover:border-b-yellow-600">
                  {el}
                </a>
              ))}
              <Link to={"/login"} className="px-4 py-1 bg-[#FFBD5B] text-black font-semibold rounded-3xl cursor-pointer active:bg-black active:text-white">
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
