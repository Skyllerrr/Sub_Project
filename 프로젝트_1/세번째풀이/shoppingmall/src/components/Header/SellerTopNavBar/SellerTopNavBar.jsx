import { React } from 'react'
import HoduLogo from '../../../../src/assets/Logo-hodu.png'
import './SellerTopNavBarStyle.css'
import Mypage from '../../../../src/assets/icon-user.svg'
import Seller from '../../../../src/assets/icon-shopping-bag.svg'

// const [button, setButton] = useState(false)

export default function SellerTopNavBar() {
  return (
    <>
      <section className='main'>
        <img src={HoduLogo} alt="hodumarket-logo" />
        <input type="text" className='main-input' placeholder='상품을 검색해보세요!' />
        <div className='mypage'>
          <button>
              <img src={Mypage} alt="mypage-logo" className='mypage-image' />
          </button>
            <span className='mypage-logo'>마이페이지</span>
        </div>
        <button className='seller-center'>
          <img src={Seller} alt="seller-logo" className="seller-logo" />
          <span>판매자 센터</span>
        </button>
      </section>
    </>
  )
}
