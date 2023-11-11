import React from 'react'
import Card from './Card'

const Product = ({filteredData}) => {
  return (
    <div className='ml-[6rem] lg:ml-[15rem] bg-slate-400 p-5'>
      {filteredData}
    </div>
  )
}

export default Product