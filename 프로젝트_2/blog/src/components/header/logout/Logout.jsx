import React from 'react'
import { Link } from 'react-router-dom'
import imgiconLogin from '../../../assets/icon-login.svg'
import imgiconRegister from '../../../assets/icon-register.svg'

export default function Logout() {
  return (
    <>
      <li>
        <Link to="#" className="button gray">
          <img src={imgiconLogin} alt="" />
          <span>Login</span>
        </Link>
      </li>
      <li className="only-pc">
        <Link to="#" className="button gray">
          <img src={imgiconRegister}alt="" />
          <span>Register</span>
        </Link>
			</li>
    </>
  )
}
