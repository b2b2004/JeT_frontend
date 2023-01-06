import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../page/css/regist.css'
import Logo from "../assert/logo.png"
import Swal from "sweetalert2";

function Regist(){

  // 유효성 검증을 위한 yup
  const formSchema = yup.object({
    userId: yup
        .string()
        .required('아이디를 입력해주세요.')
        .max(12, '아이디는 12자리 이하여야 합니다.')
        .min(6, '아이디는 6자리 이상이어야 합니다.'),
    email: yup
        .string()
        .required('이메일을 입력해주세요')
        .email('이메일 형식이 아닙니다.'),
    password: yup
        .string()
        .required('영문,숫자,기호 포함 8자리 입력')
        .min(8, '최소 8자 이상 가능합니다')
        .max(15, '최대 15자 까지만 가능합니다')
        .matches(
            /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
            '영문 숫자 특수문자 포함 8자리 입력'
        ),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')], '비밀번호가 다릅니다.'),
    username: yup
        .string()
        .required('이름을 입력해주세요.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const SignUpSummit = (data) =>{
    delete data.passwordConfirm;

    fetch("http://localhost:8087/user/ckId",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: data.userId
        })
        .then((res)=> res.text())
        .then((res) =>{
          console.log(res);
          if(res === "1")
          {
            fetch("http://localhost:8087/user/signup",
                {
                  method: "POST",
                  headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                  },
                  body: JSON.stringify(data)
                })
                .then((res)=> res.text())
                .then((res) =>{
                    Swal.fire({icon: 'warning', title: res}).then(()=>{window.location.href = "/survey/"+ data.userId;})
                })
          }else if(res === "2"){
              Swal.fire({icon: 'warning', title: '아이디가 이미 존재합니다.'});
          }else{
              Swal.fire({icon: 'error', title: '데이터 베이스 오류'});
          }

        })

  }

  return (
    <div>
        <div className='regist-container'>
            <div className='regist-logo'>
              <Link to='/'>
                <img className='r-logo' src={Logo} alt="logo"/>
              </Link>
            </div>

            <div className='regist-wrapper'>
              <form id="registForm" onSubmit={handleSubmit(SignUpSummit)}>
                <h2>회원가입</h2>
                <div className='input-group'>
                  <label>아이디</label>
                  <input
                      name="userId"
                      id="signupId"
                      type="text"
                      placeholder="아이디"
                      {...register('userId')}
                  />
                  {errors.userId && <p className="ptag">{errors.userId.message}</p>}
                </div>
                <div className='input-group'>
                  <label>비밀번호</label>
                  <input
                      name="password"
                      id="signupId"
                      type="password"
                      placeholder="비밀번호"
                      {...register('password')}
                  />
                  {errors.password && <p className="ptag">{errors.password.message}</p>}
                </div>
                <div className='input-group'>
                  <label>비밀번호 확인</label>
                  <input
                      type="password"
                      name="passwordConfirm"
                      placeholder="비밀번호 확인"
                      {...register('passwordConfirm')}
                  />
                  {errors.passwordConfirm && <p className="ptag">{errors.passwordConfirm.message}</p>}
                </div>
                <div className='input-group'>
                  <label>이름</label>
                  <input
                      type="text"
                      name="username"
                      placeholder="이름"
                      {...register('username')}
                  />
                  {errors.username && <p className="ptag">{errors.username.message}</p>}
                </div>
                <div className='input-group'>
                  <label>이메일</label>
                  <input
                      name="email"
                      id="signupEmail"
                      type="email"
                      placeholder="이메일"
                      {...register('email')}
                  />
                  {errors.email && <p className="ptag">{errors.email.message}</p>}
                </div>
                <div className='regist-btn'>
                  <button type="submit">회원가입</button>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Regist;
