import React from 'react'

const Category = () => {
  return (
    <div className=' flex flex-wrap align-middle items-center lg:gap-4 gap-2 my-5 w-full justify-center text-xs lg:text-sm'>
        <p className=' lg:p-3 p-2 lg:px-4 px-3 hover:bg-gray-200 duration-200 ease-linear transition-all rounded-md cursor-pointer'>All Categories</p>
        <p className=' lg:p-3 p-2 lg:px-4 px-3 hover:bg-gray-200 duration-200 ease-linear transition-all rounded-md cursor-pointer'>Phone & Accesories</p>
        <p className=' lg:p-3 p-2 lg:px-4 px-3 hover:bg-gray-200 duration-200 ease-linear transition-all rounded-md cursor-pointer'>Computer & Offices</p>
        <p className=' lg:p-3 p-2 lg:px-4 px-3 hover:bg-gray-200 duration-200 ease-linear transition-all rounded-md cursor-pointer'>Consumer Electronics</p>
        <p className=' lg:p-3 p-2 lg:px-4 px-3 hover:bg-gray-200 duration-200 ease-linear transition-all rounded-md cursor-pointer'>Men Clothing</p>
        <p className=' lg:p-3 p-2 lg:px-4 px-3 hover:bg-gray-200 duration-200 ease-linear transition-all rounded-md cursor-pointer'>Women clothing</p>
    </div>
  )
}

export default Category