import { useState,useEffect } from 'react'
//import { data } from '../../database/data'
import '../HomePage/HomePage.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import { Route, useNavigate } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail/ProductDetail'

// useEffect()에서 contextAPI 안쓰고, 데이터의 Item들을 props로 가져옴

export default function HomePage() {

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('http://35.76.53.28:8080/mall')
        const result = await res.json()
        setItems(result)
        setIsLoaded(true)
        //console.log(result)
      } catch (error) {
        setIsLoaded(true)
        setError(error)
      }
    }
    getData()
  }, [])

  function hh(e) {
    console.log('sdf')
  }

  if (error) {
    return <div>에러입니다! {error.message}</div>
  } else if (!isLoaded) {
    return <div>로딩중!</div>
  } else {
    return (
      <main className='product'>
        <ul className='product-list' onClick={(hh)}>
          {items && items.map((item) => 
            <ProductCard
              key={item.id}
              productName={item.productName}
              price={item.price}
              thumbnailImg={item.thumbnailImg}
            />
          )}
        </ul>
      </main>
    )
  }
}
