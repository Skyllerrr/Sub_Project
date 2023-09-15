import { useState,useEffect, useContext } from 'react'
import { Data } from '../../database/data'
import '../HomePage/HomePage.css'
import ProductCard from '../../components/ProductCard/ProductCard'

// useContext()로 데이터를 불러오는데 database라는 폴더의 data.js를 사용해서 가져옴
// 이 방법은 중요 X

export default function HomePage() {

  const [loadData, setLoadData] = useState(null)

  useEffect(() => {
    console.log('로딩중')
  }, [])

  useEffect(() => {
    if (loadData == null) {
      return
    } else {
      console.log('로딩완료')
      console.log(loadData)
    }
  }, [loadData])

  useContext(Data).then(d => {
    console.log('세팅')
    console.log(d)
    setLoadData(d)
  })

  return (
    <main className='product'>
      <ul className='product-list'>
        {loadData !== null ?
          loadData.map(item =>
              <ProductCard
                key={item.id}
                productName={item.productName}
                price={item.price}
                thumbnailImg={item.thumbnailImg}
              />
          ) : <h2>로딩중입니다.</h2>
        }
      </ul>
    </main>
  )
}

