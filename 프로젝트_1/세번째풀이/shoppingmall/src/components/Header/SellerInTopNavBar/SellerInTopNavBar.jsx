import { React } from 'react'
import HoduLogo from '../../../../src/assets/Logo-hodu.png'
import './SellerInTopNavBarStyle.css'

// const [button, setButton] = useState(false)

export default function SellerInTopNavBar() {
  return (
    <>
      <section className='main'>
        <img src={HoduLogo} alt="hodumarket-logo" />
        <span>판매자 센터</span>
      </section>
    </>
  )
}

