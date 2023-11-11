import React, { useContext, useEffect, useState } from 'react'
import data from '@/Database/Data'
import Context from '@/context/Context'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'

const Card = ({filterdProducts}) => {
  const {cart,setCart,wraning,setWarning}=useContext(Context)

  // -------add to cart-------
  const handleClick =(item)=>{
    let present = false;
    cart.forEach((cartItem)=>{
      if(cartItem.img===item.img){
        present=true;
      }
      
    })
    if(present){
      setWarning(true);
      setTimeout(()=>{
        setWarning(false);
      } ,2000)
      return;
    }
    setCart([...cart,item])
  }


  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
           {filterdProducts.map((item)=>{
            const {img,title,newPrice,id,company}=item;
            return  <div  className='border  group z-20 py-6 relative overflow-hidden rounded-md bg-white shadow-md flex flex-col px-4  gap-2 items-center' key={item.id}>
       <Link href={{pathname:`/${id}`,query:{
        id:id,
        title:title,
        img:img,
        newPrice:newPrice,
        company:company
       }}}  className='w-[50%] h-[70%] '> <img src={item.img} alt='img' className='cursor-pointer' /></Link>
  <h2 className='text-xl font-semibold'>{item.title}</h2>
  <label >Price: $<del>{item.prevPrice}</del> {item.newPrice}</label>
    <span className='flex gap-2'>{item.star}{item.star}{item.star}{item.star}</span>
    
    <Link href={{pathname:`/${id}`,query:{
        id:id,
        title:title,
        img:img,
        newPrice:newPrice,
        company:company
       }}}  className='w-full '> <button className='px-2 py-1 w-full rounded-sm bg-blue-600 text-white'>Vew Deataile</button></Link>
   
   
    <div className='absolute w-12 h-24 border border-gray-400 rounded-md bg-white flex items-center 
           justify-center  text-black flex-col translate-x-20 right-3 top-12 group-hover:translate-x-0 
           transition-transform duration-300
          '>
            <span className='border-b h-full text-xl flex items-center justify-center
             border-gray-400 hover:bg-red-400 duration-300 w-full cursor-pointer'><HiShoppingCart onClick={()=>handleClick(item)} /></span>
            <span className='border-b h-full text-xl flex items-center justify-center
             border-gray-400 hover:bg-red-400 duration-300 w-full cursor-pointer'><FaHeart /></span>

          </div>
 </div>
           })}
       

    </div>

// {/* <div>
//   <img src={img}  />
//   <h2>{title}</h2>
// </div> */}

  )
}

export default Card