import Input from '@/components/Input'
import React from 'react'

const Color = ({handleChange}) => {
  return (
    <div className='mt-2'>
    <h3 className='text-2xl font-sans font-bold'>Color</h3>
    <label className='flex items-center justify-between gap-4'>
       
         
       <span>ALL</span>
       <input type="radio" onChange={handleChange} value='' name='test' />
    </label>
    <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test"
        />
    <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="test"
        />
  <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test" />

    </div>
  )
}

export default Color