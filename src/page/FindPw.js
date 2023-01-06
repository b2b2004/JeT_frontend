import {Link} from "react-router-dom";
import Logo from "../assert/logo.png";
import '../page/css/findpw.css'
import {useState} from "react";
import Swal from "sweetalert2";
function  FindPw(){

    const [user,setUser] = useState({
        userId: '',
        username: '',
        email: ''
    })

    const changeValue = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const SignUpSummit = (e)=>{
        e.preventDefault();

        console.log(user);
        fetch("http://localhost:8087/user/findpw",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(user)
            })
            .then((res)=> res.text())
            .then((res) =>{
                Swal.fire({icon: 'info', title: res}).then(()=>{window.location.href = "/login";});
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
                    <form id="registForm" onSubmit={SignUpSummit}>
                        <h2>비밀번호찾기</h2>
                        <div className='input-group'>
                            <label>아이디</label>
                            <input placeholder='아이디' onChange={changeValue} name="userId" />
                        </div>
                        <div className='input-group'>
                            <label>이름</label>
                            <input type="text" placeholder='이름' onChange={changeValue} name="username" />
                        </div>
                        <div className='input-group'>
                            <label>이메일</label>
                            <input type="email" placeholder='이메일' onChange={changeValue} name="email" />
                        </div>
                        <div className='regist-btn'>
                            <button>확인</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FindPw;