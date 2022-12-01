import React, {useState} from 'react'
import { Link } from "react-router-dom";

import './css/login.css'
import Logo from "../assert/logo.png"
import kakao from "../assert/kakao.png"
import naver from "../assert/naver.png"



function Login() {

  const [user,setUser] = useState({
    userId: '',
    password: '',
  })

  const changeValue = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const SignInSummit = (e)=>{
    e.preventDefault();

    console.log(user);

    fetch("http://localhost:8087/login",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(user)
        })
        .then()
        .then((res) =>{
            if(res.status === 401){
                alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
                window.location.href = "/login";
            }
            else{
                let jwtToken = res.headers.get("Authorization");
                localStorage.setItem("Authorization", jwtToken);
                alert("로그인 완료");
                window.location.href = "/";
            }
        })
  }

  const Oauth2Login = (e) =>{
      console.log(e.target.name);
      window.location.href = "http://localhost:8087/oauth2/authorization/"+e.target.name;
  }

  return (
    <div>
        <div className='login-container'>
            <div className='login-logo'>
              <Link to='/'>
                <img className='l-logo' src={Logo} alt="logo"/>
              </Link>
            </div>

            <div className='login-wrapper'>
              <form id="loginForm" onSubmit={SignInSummit}>
                <div className='input-group'>
                  <label>아이디</label>
                  <input placeholder='아이디' onChange={changeValue} name="userId" />
                </div>
                <div className='input-group'>
                  <label>비밀번호</label>
                  <input type="password" placeholder='패스워드' onChange={changeValue} name="password"></input>
                </div>
                <div className='else-group'>
                  <div>
                      <a href="/Findpw">비밀번호 찾기</a>
                      <a href="/regist">회원가입</a>
                  </div>
                </div>
                <div className='login-btn'>
                  <button>로그인</button>
                </div>
                <hr/>
              </form>
                <div className='social-btn'>
                    <button className='ka-btn' name="kakao" onClick={Oauth2Login}>
                        <img className='ka-logo' src={kakao} alt="k-logo"/>
                        KAKAO
                    </button>
                    <button className='na-btn' name="naver" onClick={Oauth2Login}>
                        <img className='na-logo' src={naver} alt="n-logo"/>
                        NAVER
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
