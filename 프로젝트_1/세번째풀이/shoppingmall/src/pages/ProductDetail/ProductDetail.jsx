import { useState, useEffect, useContext } from 'react'
import { ProductInfo } from '../../context/context'
import '../HomePage/HomePage.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import TopNavBar from '../../components/Header/TopNavBar/TopNavBar'
import { useNavigate } from 'react-router-dom'

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

export default function HomePagee() {

  const [products, setProducts] = useState([])
  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch('https://test.api.weniv.co.kr/mall')
      const result = await res.json()
      setProducts(result)
    }
    fetchAPI()
  }, [])

  return (
    <ProductInfo.Provider value={{ products: products }}>
      <TopNavBar/>
      <main className='product'>
        <ul className='product-list' onClick={() => navigate('/productDetail')}>
          <ProductItems />
        </ul>
      </main>
    </ProductInfo.Provider>
  )
}

