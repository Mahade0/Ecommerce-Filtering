import Input from '@/components/Input'
import React from 'react'

const Price = ({handleChange}) => {
  return (
    <div className='mt-2'>
      <h3 className='md:text-2xl text-xl font-sans font-bold'>Price</h3>
      <label className='flex items-center justify-between gap-4'>
       
         
       <span>ALL</span>
       <input type="radio" onChange={handleChange} value='' name='test' />
    </label>
    <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test"
        />
       <Input
          handleChange={handleChange}
          value={100}
          title="$50 - 100"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - 150"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value={200}
          title="$200"
          name="test"
        />

    </div>
  )
}

export default Price