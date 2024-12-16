import React from 'react'

const Catageries = () => {
  return (
    <div className='flex justify-center space-x-36 py-12 '>
        <ul className='space-y-3 '>
            <li>Icons</li>
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
        </ul>


        <ul className='space-y-3'>
            <li>Shoes</li>
            <li>All Shoes</li>
            <li>Costom Shoes</li>
            <li>Jorden Shoes</li>
            <li>Running Shoes</li>
        </ul>

        <ul className='space-y-3'>
            <li>Clothing</li>
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
        </ul>

        <ul className='space-y-3'>
            <li>KidS'</li>
            <li>Infant & Toddler</li>
            <li>Kids' Shoes</li>
            <li>Kids' Jorden Shoes</li>
            <li>Kids' BaskitBall</li>
        </ul>
    </div>
  )
}

export default Catageries