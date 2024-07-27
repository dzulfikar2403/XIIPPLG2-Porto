import React from "react";

const SosmedIcon = ({children, href}) => {
  return (
    <a href={href} target="_blank" className="p-2 bg-[#FFBD5B] rounded-full hover:bg-white">
      {children}
    </a>
  );
};

export default SosmedIcon;
