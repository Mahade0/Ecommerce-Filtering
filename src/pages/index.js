import Sidebar from '@/category/Sidebar'
import Nav from '@/components/Nav'
import Product from '@/components/Product'
import Recommended from '@/components/Recommended'
import React, { useState } from 'react'
import data from '@/Database/Data'
import Card from '@/components/Card'

const Home = () => {
  const [selectedCategory,setSelectedCategory]=useState(null)

  // --------Input Filtering------
  const [query,setQuery]=useState('')
  const handleInputChange=(event)=>{
    setQuery(event.target.value)
  }
  const filteredItems = data.filter((data)=>data.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
 
  // -------addto cart-----


  // --------button filtering-----

  const handleClick= (event)=>{
    setSelectedCategory(event.target.value)
  }

  // ------Radio filtering-------
  const handleChange = (event)=>{
    setSelectedCategory(event.target.value)
  }

  function filteredData(data,query,selected){
    let filterdProducts = data
    // ----input Filtering------
    if(query){
      filterdProducts=filteredItems
    }

     if(selected){
      filterdProducts=filterdProducts.filter( ({ category, color, company, newPrice, title }) =>
      category === selected ||
      color === selected ||
      company === selected ||
      newPrice === selected ||
      title === selected)
     }

   return <Card filterdProducts={filterdProducts} />   
  }
  filteredData(data,query,selectedCategory)
 
 
  return (
    <>
      <div className='relative px-2 md:px-8 '>
        <div className='w-[20%] md:w-[15%] fixed top-20 lg:top-16  h-full text-black rounded-r rounded-md  lg:border-r-[1px] border-gray-600 '>
        <Sidebar handleChange={handleChange} />
        </div>
      
      <Nav handleInputChange={handleInputChange} query={query}/>
      <Recommended handleClick={handleClick} />
      <Product filteredData={filteredData(data,query,selectedCategory)} />
      </div>

    </>
  )
}

export default Home