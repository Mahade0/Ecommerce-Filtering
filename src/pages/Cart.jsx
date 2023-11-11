import Card from '@/components/Card'
import Context from '@/context/Context'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'


const Cart = () => {
  const router =useRouter()
    const {cart,setCart}=useContext(Context)
    const [show,setShow]=useState(true)
    const [price,setPrice]=useState(0)

    // -----remove all items-----

    const handleoneClick = ()=>{
      
      setCart([])
      setShow(false)
      
    }
    // -------remove single item------

    const handleRemove= (id)=>{
      const filterItem= cart.filter((item)=>item.id!==id)
       setCart(filterItem)
       if(filterItem==''){
        setShow(false)
       }
    }
    // -----total price----

    const handlePrice=()=>{
      let ans = 0;
      cart.map((item)=>(
        ans +=item.amount*item.newPrice
        
      ))
      setPrice(ans)
    }
    useEffect(()=>{
      handlePrice()
    })


    // --------price increse decresss-------

    const handleChange = (item, d) =>{
      let ind = -1;
      cart.forEach((data, index)=>{
        if (data.id === item.id)
          ind = index;
      });
      const tempArr = cart;
      tempArr[ind].amount += d;
      
      if (tempArr[ind].amount === 0)
        tempArr[ind].amount = 1;
      setCart([...tempArr])
    }

  


  return (
    
    
    <div className=' bg-slate-900 '>
       <div className='flex  items-center justify-center gap-10 py-4 border-b sticky top-0 z-10 overflow-hidden bg-gray-900 px-6 '>
    {show ? <button onClick={handleoneClick}  class=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded capitalize font-semibold">Clear all item</button>:<Link href={'/'} className='bg-yellow-400 py-4 rounded-sm text-black font-bold text-2xl text-center'><button >Goto shopping</button></Link>}

{show && <div className='bg-gray-500 text-black text-xl font-bold  text-center font-serif px-2 '>Total Price : ${price}</div>}
    </div>
      <div className='lg:px-32 px-4  py-10 w-full lg:grid-cols-1 grid grid-cols-2 items-center flex-col gap-5  text-white'>
      {cart.map((item)=>{
        return(
          <div className='flex flex-col justify-center lg:flex-row gap-2 h-full lg:gap-8 px-4 lg:px-10 py-4 bg-white text-black rounded-md shadow-md shadow-green-400 items-center'>
            <img src={item.img} alt="img" className='w-full lg:w-[15%] h-[100%] '/>
            <h3 className='text-sm lg:text-xl'>{item.title}</h3>
            <p>Price: ${item.newPrice}</p>
                <div className=' flex gap-2 items-center'>
                <button className='border rounded px-2 font-bold text-2xl hover:shadow-lg hover:shadow-green-700 duration-300' onClick={()=>handleChange(item, -1)}>-</button>
            <span>{item.amount}</span>
            <button className='border rounded px-2 font-bold text-2xl hover:shadow-lg hover:shadow-green-700 duration-300' onClick={()=>handleChange(item, +1)}>+</button>
                </div>
           <div className='flex gap-3 lg:flex-row flex-col items-center'>
           <button  class=" text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-900 font-semibold rounded"><Link href={'./ChackOut'}>Chek out</Link></button>
            <button class=" text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 font-semibold rounded" onClick={()=>handleRemove(item.id)}>Revome item</button>
           </div>


          </div>
        )
      })}

       
     

      
      
    </div>
   
      
    </div>
  )
}

export default Cart