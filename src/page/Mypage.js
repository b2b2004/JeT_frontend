import React from 'react'
import Navbar from '../component/nav/Navbar.js'


function Mypage() {
  return (
      <div>
        <Navbar/>
        <div>
        <h2>마이페이지</h2>
            <div className='user_info'>
                <form>
                <h2>회원 정보</h2>
                    <div>
                        <label>이름</label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <label>아이디</label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <label>이메일</label>
                        <input type="text"></input>
                    </div>
                    <div><button>회원 정보 변경</button></div>
                </form>
            </div>
            <div className='change_pw'>
                <form>
                    <h2>비밀번호 변경</h2>
                    <div>
                        <label>비밀번호</label>
                        <input type="password"></input>
                    </div>
                    <div>
                        <label>변경할 비밀번호</label>
                        <input type="password"></input>
                    </div>
                    <div>
                        <label>변경할 비밀번호 확인</label>
                        <input type="password"></input>
                    </div>
                    <div><button>비밀번호 변경</button></div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Mypage