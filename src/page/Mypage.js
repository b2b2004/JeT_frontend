import React from 'react'
import Navbar from '../component/nav/Navbar'
import { BiChevronsUp , BiChevronsRight} from "react-icons/bi";

import './css/mypage.css'


function Mypage() {
  return (
    <>
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
                                    뭐로 보여주지
                                </div>
                                <hr/>
                                <h3>코스 😎</h3>
                                <div className='course-like'>
                                    그러게
                                </div>
                            </div>
                        </div>
                        <div className='s1-2'>
                            <div className='basic-info'>
                                <div className='mypage-input'>
                                    <label>이름</label>
                                    <input type="text"></input>
                                </div>
                                <div className='mypage-input'>
                                    <label>아이디</label>
                                    <input type="text"></input>
                                </div>
                                <div className='mypage-input'>
                                    <label>이메일</label>
                                    <input type="email"></input>
                                </div>  
                            </div>

                       </div>
                    </div>
                    <div className='scroll_btns'>
                        <a href='#change_ui'>개인정보 변경 
                        <BiChevronsRight color="000" size="25"/></a>
                        <a href='#change_pw'>비밀번호 변경 
                        <BiChevronsRight color="000" size="25"/></a>
                        <a href='#change_pi'>성향정보 변경 
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
                            <div className='mypage-input'>
                                <label>이름</label>
                                <input type="text"></input>
                            </div>
                            <div className='mypage-input'>
                                <label>아이디</label>
                                <input type="text"></input>
                            </div>
                            <div className='mypage-input'>
                                <label>이메일</label>
                                <input type="email"></input>
                            </div>
                            <div className='mypage-input'>
                                <label>이메일</label>
                                <input type="email"></input>
                            </div>
                            <div className='btns'>
                                <button className='change-btn'>회원정보 변경</button>
                            </div>
                        </div>
                    </div>
                    <div className='scroll_btns'>
                        <a href='#change_pw'>비밀번호 변경  
                        <BiChevronsRight color="000" size="25"/></a>
                        <a href='#change_pi'>성향정보 변경  
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
                <form>
                    <div className='section-title'>
                        <h2>비밀번호 변경</h2>
                    </div>
                    <div className='section-container'>
                        <div className='pass-change'>
                            <div className='mypage-input'>
                                <label >비밀번호</label>
                                <input type="password"></input>
                            </div>
                            <div className='mypage-input'>
                                <label>변경할 비밀번호</label>
                                <input type="password"></input>
                            </div>
                            <div className='mypage-input'>
                                <label>비밀번호 확인</label>
                                <input type="password"></input>
                            </div>
                            <div className='btns'>
                                <button className='change-btn'>비밀번호 변경</button>
                            </div>
                        </div>
                    </div>
                    <div className='scroll_btns'>
                        <a href='#change_ui'>개인정보 변경 
                        <BiChevronsRight color="000" size="25"/></a>
                        <a href='#change_pi'>성향정보 변경  
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

        <section className='section' id='change_pi'>
            <div className='section-form'>
                <form>
                    <div className='section-title'>
                        <h2>성향정보 변경</h2>
                    </div>
                    <div className='section-container'>
                        <div className='pesonal-change'>
                        </div>
                        
                    </div>
                    <div className='scroll_btns'>
                        <a href='#change_ui'>개인정보 변경 
                        <BiChevronsRight color="000" size="25"/></a>
                        <a href='#change_pw'>비밀번호 변경 
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
     </div>
    </>
  )
}

export default Mypage
