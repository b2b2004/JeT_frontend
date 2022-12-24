import React from 'react'
import Navbar from '../component/nav/Navbar.js'


function Mypage() {
    const Authorization = localStorage.getItem("Authorization");

    const deleteId = () =>{
        let result = confirm("정말 삭제하시겠습니까?");

        if(result)
        {
            fetch("http://localhost:8087/user/deleteId",
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8', Authorization
                    },
                })
                .then((res)=> res.text())
                .then((res) =>{
                    alert(res);
                    window.location.href = "/";
                })
        }
    }


  return (
      <div>
        <Navbar/>
        <div>
        <h2>마이페이지</h2>
            <div className='myPage_menu_btn'>
                <button>개인정보 수정</button>
                <button>비밀번호 수정</button>
                <button>성향정보 수정</button>
                <button onClick={deleteId}>탈퇴하기</button>
            </div>

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
                        <input type="email"></input>
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