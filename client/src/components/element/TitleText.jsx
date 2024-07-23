import React from 'react'

const HeaderText = ({text1,text2}) => {
  return (
    <div className="font-bold text-xl flex flex-col text-white">
    <h1>{text1}</h1>
    <h1>{text2}</h1>
  </div>
  )
}

export default HeaderText