import React from 'react'

const RightCardContent = () => {
  return (
    <div>
       <div className='absolute top-0 left-0 w-full h-full  p-8 flex flex-col justify-between'>
      <h2 className='bg-white h-9 w-9 rounded-full flex justify-center items-center text-2xl font-semibold'>1</h2>
      <div><p className='text-lg leading-relaxed text-white mb-13'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eius corporis quo. Deserunt, voluptas est?</p>
        <div className=' flex justify-between'>
            <button className='bg-blue-500 text-white px-7 py-3 font-semibold rounded-full '>Satisfied</button>
            <button className='bg-blue-500 text-white px-4 py-2 font-semibold rounded-full '><i className="ri-arrow-right-line"></i></button></div>
            </div>
    </div>
    </div>
  )
}

export default RightCardContent
