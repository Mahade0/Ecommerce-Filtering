import React from 'react'

const Input = ({title,value,name,handleChange}) => {
  return (
    <label className='flex items-center justify-between md:gap-4 text-xs lg:text-xl'>
       
         
       <span> {title}</span>
       <input className='text-[10px]' type="radio" onChange={handleChange} value={value} name={name} />
    </label>
  )
}

export default Input