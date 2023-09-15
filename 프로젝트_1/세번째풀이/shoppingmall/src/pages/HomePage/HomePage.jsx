import { useState, useEffect, useContext } from 'react'
import { ProductInfo } from '../../context/context'
import '../HomePage/HomePage.css'
import ProductCard from '../../components/ProductCard/ProductCard'

// context()를 따로 컴포넌트로 뺀 후에 사용

const ProductItems = () => {
  const products = useContext(ProductInfo)
  return (
    <>
      {products.products.map(item =>
          <ProductCard
            key={item.id}
            productName={item.productName}
            price={item.price}
            thumbnailImg={item.thumbnailImg}
          />
      )}
    </> 
  )
}

export default function HomePage() {

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch('https://test.api.weniv.co.kr/mall')
      const result = await res.json()
      setProducts(result)
    }
    fetchAPI()
  }, [])

  return (
    <ProductInfo.Provider value={{products:products}}>
      <main className='product'>
        <ul className='product-list'>
          <ProductItems/>
        </ul>
      </main>
    </ProductInfo.Provider>
  )
}

