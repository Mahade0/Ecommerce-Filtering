

import Input from '@/components/Input'
import React from 'react'


const Category = ({ handleChange}) => {
  return (
    <>
    <div className='mt-2'>
      <h3 className='lg:text-xl text-[10px] font-sans font-bold'>Category</h3>
      <label className='flex items-center justify-between gap-4'>
       
         
       <span>ALL</span>
       <input type="radio" onChange={handleChange} value='' name='test' />
    </label>
    <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
    <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
  <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test" />
   </div>

    </>
  )
}

export default Category