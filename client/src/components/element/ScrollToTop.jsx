import React, { useEffect, useState } from 'react'
import { HiArrowNarrowUp } from 'react-icons/hi';

const ScrollToTop = () => {
  const [toTop,setToTop] = useState(false)

  const scrollToTop = () => {
      window.scrollTo({top: 0,behavior: "smooth"});
  }

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      return window.scrollY > 0 ? setToTop(true) : setToTop(false)
    })
  },[])

  return (
    <>
    {toTop && (
      <button className={`fixed z-50 cursor-pointer bottom-5 right-5 p-2 bg-[#FFBD5B] bg-opacity-45 border-2 border-[#FFBD5B]`} onClick={scrollToTop}><HiArrowNarrowUp /></button>
    )}
    </>
  )
}

export default ScrollToTop