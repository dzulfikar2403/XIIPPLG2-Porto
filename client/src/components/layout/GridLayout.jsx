import React from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const GridLayout = ({title,children}) => {

  return (
    <div className='min-h-screen bg-[#251F17]'>
      <div className='px-4 py-3'>
        <Link to={'/'} className='text-white font-medium flex items-center gap-3'><HiArrowNarrowLeft className='w-5 h-5'/> <p>Back</p></Link>
        <div className='p-4 flex flex-col justify-center items-center'>
          <h1 className='p-4 font-bold text-white text-xl border-b-1 border-b-[#FFBD5B] md:text-3xl'>{title}</h1>
          <div className='w-full p-4 grid grid-cols-2 gap-2 justify-items-center md:grid-cols-3'>
            {children}
          </div>
        </div>
      </div>
      <hr className='absolute bottom-0 py-1 bg-[#FFBD5B] w-full'/>
    </div>
  )
}

export default GridLayout