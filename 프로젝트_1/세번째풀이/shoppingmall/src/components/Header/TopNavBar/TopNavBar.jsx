import { React } from 'react'
import HoduLogo from '../../../assets/Logo-hodu.png'
import './TopNavBarStyle.css'
import Cart from '../../../../src/assets/icon-shopping-cart.svg'
import Mypage from '../../../../src/assets/icon-user.svg'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

//const [button, setButton] = useState(false)

function handleClick(e) {
  console.log('sdf')
}

export default function TopNavBar() {

  const navigate = useNavigate();

  return (
    <>
      <section className='main'>
        <img src={HoduLogo} alt="hodumarket-logo" className='hodudu' onClick={() => 
          navigate('/')
        }/>
        <input type="text" className='main-input' placeholder='상품을 검색해보세요!' />
      </section>
      <section className='sub-cart'>
        <button>
          <img src={Cart} alt="cart-logo" className='cart-image' />
        </button>
        <span className='cart-logo'>장바구니</span>
        <button>
            <img src={Mypage} alt="mypage-logo" className='mypage-image' />
        </button>
        <span className='mypage-logo'>마이페이지</span>
      </section>
    </>
  )
}
