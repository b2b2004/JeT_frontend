import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

import "./navbar.css"
import Logo from "../../assert/logo.png"

import { FiLogIn } from "react-icons/fi";

function Navbar() {

    const [user,setUser] = useState({});
    useEffect(()=>{
        const Authorization = localStorage.getItem("Authorization");
        if(Authorization != null) {
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
                    console.log(res);
                    setUser(res);
                })
        }

        }
    ,[])

    const Logout = () =>{
        localStorage.clear();
        alert("로그아웃 되었습니다.");
        window.location.href = "/";
    }

    const Mypage = () =>{
        window.location.href = "/Mypage";
    }

  return (
    <div className='Nav'>
        <div className='nav-Logo'>
            <Link to='/' className='logo'>
                <img className='logo' src={Logo} alt="logo"/>
            </Link>
        </div>

        <div className='nav-login'>
            {user.userId == null
                ?
                <a onClick={()=>{window.location.href = "/login";}}>
                    <FiLogIn size='24'/>
                </a>
                :
                <div className="nav-login-status">
                <a onClick={Mypage}>{user.username}({user.userId})</a>
                <a onClick={Logout}>Logout</a>
                </div>
            }
        </div>
    </div>
  )
}

export default Navbar;
