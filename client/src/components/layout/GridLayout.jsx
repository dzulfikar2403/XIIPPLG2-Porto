import React from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import BottomBar from '../element/BottomBar'
import Back from '../element/Back'

const GridLayout = ({title,children}) => {

  return (
    <div className='relative min-h-screen bg-[#251F17]'>
      <Back to={'/'}/>
      <div className='px-4 py-3'>
        <div className='p-4 flex flex-col justify-center items-center'>
          <h1 className='p-4 font-bold text-white text-xl border-b-1 border-b-[#FFBD5B] md:text-3xl'>{title}</h1>
          <div className='w-full p-4 grid grid-cols-2 gap-2 justify-items-center md:grid-cols-3'>
            {children}
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}

export default GridLayout