import React from 'react'
import Product from './Product'


function Products() {
    const products = [
        {
            src : 'https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812'
        },
        {
            src : 'https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824'
        },
        {
            src : 'https://cdn.shopify.com/s/files/1/0240/7285/products/KushJonesLST-ShirtinBlack09_360x.jpg?v=1642719733'
        },
        {
            src : 'https://cdn.shopify.com/s/files/1/0240/7285/products/VisitorsCrewneckSweatshirtinWhite11_360x.jpg?v=1642719779'
        }, 
        {
            src : 'https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-HARVEST-2_360x.jpg?v=1642616536'
        },
        {
            src : 'https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216'
        },
        {
            src : 'https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216'
        },
        {
            src : 'https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812'
        }
    ]
  return (
    <div className=' flex flex-wrap p-5 items-center justify-center'>
        {products.map((product, index) => (
        <Product item={product} key={index}/>
        ))}
    </div>
  )
}

export default Products