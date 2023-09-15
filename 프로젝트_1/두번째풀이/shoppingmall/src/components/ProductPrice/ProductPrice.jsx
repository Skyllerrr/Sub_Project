import React from 'react'
import './ProductPrice.css'

export default function ProductPrice({price}) {
  return (
    <strong className='price m-price'>{price}<span>원</span></strong>
  )
}
