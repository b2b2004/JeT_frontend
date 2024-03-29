import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

import "./navbar.css"
import Logo from "../../assert/logo.png"

import { FiLogIn } from "react-icons/fi";
import Swal from "sweetalert2";

function Navbar() {

    const [user,setUser] = useState({});
    const Authorization = localStorage.getItem("Authorization");
    useEffect(()=>{
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
                    if(res.status === 500)
                    {
                        localStorage.clear();
                    }
                    setUser(res);
                })
        }else{
            localStorage.clear();
        }

        }
    ,[Authorization])

    const Logout = () =>{
        localStorage.clear();
        Swal.fire({icon: 'success', title: '로그아웃'}).then(()=>{window.location.href = "/";});
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
