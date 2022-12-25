import React from 'react'
import Email from '../Email'
import Navbar from '../Navbar'
import Notification from '../Notification'
import Products from '../Products'

function CategoryPage() {
  return (
    <div>
        <Notification/>
        <Navbar/>
        <div className='flex flex-col p-5 ml-2'>
            <h1 className='text-[25px]'>Men's Cloths</h1>
            <div className='flex items-center justify-between mt-3'>
            <div>
                <p>Filter by</p>
                <select className='mt-2 border-2 border-silver' >
                    <option selected disabled>Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
                <select className='ml-2 border-2 border-silver'>
                <option selected disabled>Color</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Black</option>
                </select>
                </div>
                <div>
                    <p>Sort by</p>
                <select className='mt-2 border-2 border-silver'>
                <option selected disabled>Newset (first)</option>
                    <option>Newest</option>
                    <option>Blue</option>
                    <option>Black</option>
                </select> 
                </div>
            </div>
        </div>
        <Products/>
        <Email/>
    </div>
  )
}

export default CategoryPage