import Context from '@/context/Context'
import Link from 'next/link'
import React, { useContext } from 'react'
import {BsFillCartCheckFill,BsFillSearchHeartFill} from 'react-icons/bs'

const Nav = ({handleInputChange,query}) => {
  let {cart}=useContext(Context)
  return (
    <div className='flex items-center bg-sky-700 justify-around gap-10 border sticky top-0 z-40 overflow-hidden py-3'>
      <h4 className='text-2xl font-bold  text-gray-900 lg:block hidden'>Ecommerce Store</h4>
     <div className='relative'>
     <input type='text' placeholder='Search Your Items'  onChange={handleInputChange} value={query}
      className='py-2 px-4  outline-yellow-400 rounded-md text-black' />
      <span className='absolute w-10 h-full rounded-r-md bg-yellow-300 right-0 top-0
      flex items-center justify-center'><BsFillSearchHeartFill /></span>
     </div>
      <Link href={'./Cart'} className='relative'><BsFillCartCheckFill className=' text-2xl ' /> <span className='absolute -top-3 -right-3 text-red-500 text-xl'>{cart.length}</span> </Link>
    </div>
  )
}

export default Nav