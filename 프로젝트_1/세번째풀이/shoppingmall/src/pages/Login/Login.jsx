import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import fetchApi from '../../utils/fetchApi';
//import UserInfo from "../../context/LoginContext";

import { LoginButton, H2, LoginContainer, LoginForm, NavStyle, WarningMessage } from "./Login.style";

export default function Login() {
  const navigate = useNavigate();
  //const { setUserInfo } = useContext(UserInfo);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [emailWarining, setEmailWarining] = useState("");
  const [passwordWarining, setPasswordWarining] = useState("");

    const EmailHandler = (e) => {
      if (e.target.type === "email") {
        setUserEmail(e.target.value);
        if (validateEmail(e.target.value)) {
          setEmailWarining("");
        } else {
          setEmailWarining("올바른 이메일 형식이 아닙니다.");
        }
      }
    }

    const PasswordHandler = (e) => {
      if (e.target.type === "password") {
        setUserPassword(e.target.value);
        if (e.target.value.length < 6) {
          setPasswordWarining("비밀번호는 6자리 이상이어야 합니다.");
        } else {
          setPasswordWarining("");
        }
        setWarningMessage("");
      }
    }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /*
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const json = await fetchApi(
        "user/login",
        "POST",
        JSON.stringify({
          user: {
            email: userEmail,
            password: userPassword,
          },
        })
      );

      if (json.user) {
        setUserInfo(json.user);
        localStorage.setItem("userInfo", JSON.stringify(json.user));
        localStorage.setItem("token", json.user.token);
        navigate("/home");
      } else {
        setWarningMessage("이메일과 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  */
  
  return (
    <>
    <LoginContainer>
        <H2>로그인</H2>
        <LoginForm onSubmit={EmailHandler}>
          <input type="email" id="user-email" onChange={EmailHandler} value={userEmail}>
          </input>

          {emailWarining && <WarningMessage>{emailWarining}</WarningMessage>}

          <input type="password" id="user-password" onChange={PasswordHandler} value={userPassword}>
            
          </input>
          {passwordWarining && <WarningMessage>{passwordWarining}</WarningMessage>}
          <WarningMessage alignCenter={true}>{warningMessage}</WarningMessage>
          <LoginButton onClick={() => navigate('/home')}category="basic" type="submit" disabled={!(userEmail && userPassword && !emailWarining && !passwordWarining)}>
            로그인
          </LoginButton>
        </LoginForm>
        <NavStyle to={"/signup"}>이메일로 회원가입하기</NavStyle>
      </LoginContainer>
    </>
  );
}
