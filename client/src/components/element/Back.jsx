import React from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Back = ({to}) => {
  return (
    <Link to={to} className="absolute px-4 py-3 text-white font-medium flex items-center gap-3">
    <HiArrowNarrowLeft className="w-5 h-5" /> <p>Back</p>
  </Link>
  )
}

export default Back