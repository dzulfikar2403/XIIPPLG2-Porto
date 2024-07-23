import React from "react";
import logoClass from "../../assets/logoXIIPPLG2New.png"

const Logo = () => {
  return (
    <div className="flex items-center gap-2 px-2 py-1 w-32 border-b-2 border-b-orange-950">
      <img src={logoClass} alt="logo" className="w-5 h-5 rounded-full" />
      <h1 className="text-base font-medium">XII PPLG 2</h1>
    </div>
  );
};

export default Logo;
