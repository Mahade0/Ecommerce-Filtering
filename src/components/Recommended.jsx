import React, { useState } from 'react'

const Recommended = ({handleClick}) => {
  // const [nike,setNike]=useState()
  // const [all,setAll]=useState()
  // const [puma,srt]=useState()
  // const [nike,setNike]=useState()
  // const [nike,setNike]=useState()


  return (
    <div className='ml-[6rem] sticky  z-30 top-16 md:ml-[15rem]  flex items-center gap-5 bg-white text-white border-b px-2 py-2'>
      <h2 className='hidden lg:block my-2 font-bold text-2xl text-[aqua]'>Brand</h2>
      <div>
        <button onClick={handleClick} value='' className='text-xs md:text-xl text-slate-500 lg:font-semibold font-serif lg:px-3 px-1 lg:py-1 hover:shadow-md hover:shadow-green-600 border border-transparent hover:border-green-500 duration-300 lg:rounded-md rounded-sm'>All</button>
        <button onClick={handleClick} value='Nike' className='text-xs md:text-xl text-slate-400 lg:font-semibold font-serif lg:px-3 px-1 lg:py-1 hover:shadow-md hover:shadow-green-600 border border-transparent hover:border-green-500 duration-300 lg:rounded-md rounded-sm'>Nike</button>
        <button onClick={handleClick} value='Puma' className='text-xs md:text-xl text-slate-400 lg:font-semibold font-serif lg:px-3 px-1 lg:py-1 hover:shadow-md hover:shadow-green-600 border border-transparent hover:border-green-500 duration-300 lg:rounded-md rounded-sm'>Puma</button>
        <button onClick={handleClick} value='Adidas' className='text-xs md:text-xl text-slate-400 lg:font-semibold font-serif lg:px-3 px-1 lg:py-1 hover:shadow-md hover:shadow-green-600 border border-transparent hover:border-green-500 duration-300 lg:rounded-md rounded-sm'>Adidas</button>
        <button onClick={handleClick} value='Vans' className='text-xs md:text-xl text-slate-400 lg:font-semibold font-serif lg:px-3 px-1 lg:py-1 hover:shadow-md hover:shadow-green-600 border border-transparent hover:border-green-500 duration-300 lg:rounded-md rounded-sm'>Vans</button>


      </div>
    </div>
  )
}

export default Recommended