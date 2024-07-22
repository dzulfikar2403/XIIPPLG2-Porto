import React from 'react'

const InputEl = ({type,name,value,onChange}) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className='text-base font-medium' >{name}<span className='text-rose-700'>*</span></label>
      <input type={type} id={name} name={name} placeholder={`your ${name}`} value={value} required onChange={onChange} className='w-72 text-sm px-3 py-1 rounded-full border border-slate-300' />
    </div>
  )
}

export default InputEl