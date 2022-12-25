import React from 'react'
import Category from './Category'


import img1 from './Category/img1.jpg'
import img2 from './Category/img2.png'
import img3 from './Category/img3.jpg'
function Categories() {
    const categories = [
        {
            title: 'Tshirt for men',
            src: img1
        }, 
        {
            title: ' Tshirt for women',
            src: img2
        },
        {
            title: 'Stylist Tshirt',
            src: img3
        }
    ]
  return (
    <div className='flex justify-center items-center p-5'>
        {categories.map((categorie, index) => (
            <Category item={categorie} key={index}/>
            ))}
            
    </div>
  )
}

export default Categories