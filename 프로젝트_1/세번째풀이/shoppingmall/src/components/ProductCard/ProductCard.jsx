import React, { useRef } from 'react'
import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import '../ProductCard/ProductCard.css'
import ProductDetail from '../ProductDetail/ProductDetail'
import { Route, useNavigate } from 'react-router-dom'

export default function ProductCard({ productName, price, thumnailImg }) {
  const likeBtn = useRef()
  const navigate = useNavigate()

  function handleLikeClick(e) {
    //console.log(e)
    //console.log(e.currentTarget.classList)
    e.currentTarget.classList.toggle('on')
  }

  function hh(e) {
    
  }

  return (
  <>
    <li className='product-item'>
      <div className='product-img'>
        <ProductImage thumnailImg={thumnailImg} productName={productName} />
      </div>
      <ProductName productName={productName}/>
      <button ref={likeBtn} onClick={handleLikeClick} className='like-btn'></button>
      <div className='product-price'>
        <ProductPrice price={price}/>
      </div>
    </li>
  </>
  )
}
