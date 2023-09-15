import React from 'react'
import './ProductImage.css'

export default function ProductImage({ thumbnailImg, productName }) {
  const imgUrl = 'http://test.api.weniv.co.kr/' + thumbnailImg
  return (
    <img src={imgUrl} alt={productName} />
  )
}
