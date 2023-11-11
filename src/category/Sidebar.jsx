import React from 'react'
import Category from './Category'
import Price from './Price'
import Color from './Color'

const Sidebar = ({handleChange}) => {
  return (
    <div className='md:px-8'>
      <Category handleChange={handleChange} />
      <Price  handleChange={handleChange} />
      <Color handleChange={handleChange}  />
    </div>
  )
}

export default Sidebar