import React, {useEffect, useState} from 'react'
import Navbar from '../component/nav/Navbar'
import { BiChevronsUp , BiChevronsRight} from "react-icons/bi";
import './css/mypage.css'
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import Slider from "react-slick";

import MypageCard from "../component/card/MypageCard";
import Swal from "sweetalert2";

function Mypage() {
    const [user,setUser] = useState({});
    const [userlikeplace,setUserlikeplace] = useState([]);
    const Authorization = localStorage.getItem("Authorization");
    const [info, setInfo] = useState({
        email: ''
    });
    const [pw, setPw] = useState({
        password1: '',
        password2: '',
        password3: ''
    });

    useEffect(()=>{
        fetch(
            'http://localhost:8087/user/loginuser', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
            }
        )
            .then((res) => res.json())
            .then((res) => {
                if(res.status === 500)
                {
                    localStorage.clear();
                }
                console.log(res);
                setUser(res);
            })

        fetch(
            'http://localhost:8087/user/mypagelikePlace', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
            }
        )
            .then((res) => res.json())
            .then((res) => {
                setUserlikeplace(res);
                console.log(res);
            })

    }, [])

    const chageInfo = (e) => {
        e.preventDefault();
        console.log(info);

        fetch(
            'http://localhost:8087/user/chageUser', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
                body: info.email
            }
        )
            .then((res) => res.json())
            .then((res) => {
                if(res.status === 500)
                {
                    localStorage.clear();
                    Swal.fire({icon: 'warning', title: '로그인 시간이 만료 되었습니다.'}).then(()=>{ window.location.href = "/";});
                }
                if(res === 1)
                {
                    Swal.fire({icon: 'success', title: '회원정보 수정 완료'}).then(()=>{ window.location.href = "/Mypage";});
                }else{
                    Swal.fire({icon: 'error', title: '회원정보 수정 실패'}).then(()=>{ window.location.href = "/";});
                }
            })
    }

    const changeValue = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        });
    };

    const changeValue1 = (e) => {
        setPw({
            ...pw,
            [e.target.name]: e.target.value,
        });
    };

    // 비밀번호 변경 유효성 검증
    const formSchema = yup.object({
        password2: yup
            .string()
            .required('영문,숫자,기호 포함 8자리 입력')
            .min(8, '최소 8자 이상 가능합니다')
            .max(15, '최대 15자 까지만 가능합니다')
            .matches(
                /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
                '영문 숫자 특수문자 포함 8자리 입력'
            ),
        password3: yup
            .string()
            .oneOf([yup.ref('password2')], '비밀번호가 다릅니다.'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(formSchema),
    });


    const ChagePassword = (data) => {
        pw.password3 = data.password3;
        // 현재 비밀번호가 맞는지 확인
        fetch('http://localhost:8087/user/ckPw', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
                body: pw.password1
            }
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if(res === 3)
                {
                    Swal.fire({icon: 'error', title: '현재 비밀번호가 일치하지 않습니다.'});
                }else{
                    chagepw();
                }
            })
    }

    function chagepw(){
        fetch('http://localhost:8087/user/chagePw', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
                body: pw.password3
            }
        )
            .then((res) => res.json())
            .then((res) => {
                if(res === 1)
                {
                    localStorage.clear();
                    Swal.fire({icon: 'success', title: '비밀번호 번경 성공'}).then(()=>{ window.location.href = "/login";});
                }else if(res === 2){
                    Swal.fire({icon: 'error', title: '비밀번호 변경 실패'});
                }
            })
    }

    const courseMove = () =>{
        fetch('http://localhost:8087/course/newestMyCourse', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                }
            }
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if(res == 0){
                    Swal.fire({icon: 'question', title: '추천 받은 코스가 없습니다.'});
                }else{
                    window.location.href = "/course/" + res;
                }
            })
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    console.log(userlikeplace.length);
  return (
    <div className='page-scroll-lock'>
    <div className='fix'>
        <Navbar/>
    </div>

     <div className='section-containers'>
        <section className='section' id='user_info'>
            <div className='section-form'>
                <form>

                    <div className='section-container'>
                        <div className='s1-1'>
                            <div className='place_course-like'>
                                <h3>관광지 😍</h3>
                                <div className='place-like'>
                                    <Slider {...settings}>
                                        {userlikeplace.map((userlikeplace) => (
                                            <div>
                                                <MypageCard key={userlikeplace.user_like_num} userlikeplace={userlikeplace} />
                                            </div>
                                        ))}
                                        <div></div>
                                        <div></div>
                                    </Slider>
                                </div>
                                <hr/>
                                <h3>코스 😎</h3>
                                <div className='course-like'>
                                    <h2 onClick={courseMove}>최근 추천 받은 코스로 이동하기</h2>
                                </div>
                            </div>
                        </div>
                        <div className='s1-2'>
                            <div className='basic-info'>
                                <div className='mypage-input'>
                                    <label>이름</label>
                                    <input type="text" placeholder={user.username} disabled></input>
                                </div>
                                <div className='mypage-input'>
                                    <label>아이디</label>
                                    <input type="text" placeholder={user.userId} disabled></input>
                                </div>
                                <div className='mypage-input'>
                                    <label>이메일</label>
                                    <input type="email" placeholder={user.email} disabled></input>
                                </div>  
                            </div>

                       </div>
                    </div>
                    <div className='scroll_btns'>
                        <a href='#change_ui'>개인정보 변경 
                        <BiChevronsRight color="000" size="25"/></a>
                        <a href='#change_pw'>비밀번호 변경 
                        <BiChevronsRight color="000" size="25"/></a>
                        <a onClick={()=>{window.location.href ="/survey/" + user.userId}}>성향정보 변경
                        <BiChevronsRight color="000" size="25"/></a>
                    </div>
                    <div className='scroll_top_btn'>
                        <a href="#user_info">
                            <BiChevronsUp color="#fff" size="30"/>
                        </a>
                    </div>
                    <div className='scroll_top_btn'>
                        <a href="#user_info">
                            <BiChevronsUp color="#fff" size="30"/>
                        </a>
                    </div>
                </form>
            </div>
        </section>

        <section className='section' id='change_ui'>
            <div className='section-form'>
                <form>
                    <div className='section-title'>
                        <h2>회원정보 변경</h2>
                    </div>
                    <div className='section-container'>
                        <div className='info-change'>
                            <form action="">
                                <div className='mypage-input'>
                                    <label>이름</label>
                                    <input type="text" disabled placeholder={user.username}></input>
                                </div>
                                <div className='mypage-input'>
                                    <label>아이디</label>
                                    <input type="text" disabled placeholder={user.userId}></input>
                                </div>
                                <div className='mypage-input'>
                                    <label>이메일</label>
                                    <input type="email" placeholder={user.email} name="email" onChange={changeValue}></input>
                                </div>
                                <div className='btns'>
                                    <button className='change-btn' onClick={chageInfo}>회원정보 변경</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='scroll_btns'>
                        <a href='#change_pw'>비밀번호 변경  
                        <BiChevronsRight color="000" size="25"/></a>
                        <a onClick={()=>{window.location.href ="/survey/" + user.userId}}>성향정보 변경
                        <BiChevronsRight color="000" size="25"/></a>
                    </div>
                </form>
                    <div className='scroll_top_btn'>
                        <a href="#user_info">
                            <BiChevronsUp color="#fff" size="30"/>
                        </a>
                    </div>
            </div>
        </section>

        <section className='section' id='change_pw'>
            <div className='section-form'>
                    <div className='section-title'>
                        <h2>비밀번호 변경</h2>
                    </div>
                    <div className='section-container'>
                        <div className='pass-change'>
                            <form  onSubmit={handleSubmit(ChagePassword)}>
                                <div className='mypage-input'>
                                    <label >현재 비밀번호</label>
                                    <input type="password" name="password1" onChange={changeValue1}></input>
                                </div>
                                <div className='mypage-input'>
                                    <label>변경할 비밀번호</label>
                                    <input
                                        id="signupId"
                                        type="password"
                                        name="password2"
                                        {...register('password2')}
                                    />
                                    {errors.password2 && <p className="ptag">{errors.password2.message}</p>}
                                </div>
                                <div className='mypage-input'>
                                    <label>비밀번호 확인</label>
                                    <input
                                        type="password"
                                        name="password3"
                                        {...register('password3')}
                                    />
                                    {errors.password3 && <p className="ptag">{errors.password3.message}</p>}
                                </div>
                                <div className='btns'>
                                    <button className='change-btn'>비밀번호 변경</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='scroll_btns'>
                        <a href='#change_ui'>개인정보 변경 
                        <BiChevronsRight color="000" size="25"/></a>
                        <a onClick={()=>{window.location.href ="/survey/" + user.userId}}>성향정보 변경
                        <BiChevronsRight color="000" size="25"/></a>
                    </div>
                    <div className='scroll_top_btn'>
                        <a href="#user_info">
                            <BiChevronsUp color="#fff" size="30"/>
                        </a>
                    </div>
            </div>
        </section>
     </div>
    </div>
  )
}

export default Mypage
