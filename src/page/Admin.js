import React from 'react'
import Navbar from '../component/nav/Navbar'

import './css/admin.css'

const Admin = () => {
  return (
    <>
      <Navbar/>
      <div className='admin-container'>
        <section className='admin-wrap'>
            <article className='left-side'>
                간단한 사이드 메뉴
            </article>
            <article className='right-side'>
                <div className='user-table'>
                  <table className=''>
                    <th>이름</th>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>이메일</th>
                    <tr>
                      <td>홍길동</td>
                      <td>honggil</td>
                      <td>gildong11</td>
                      <td>gildong@naver.cmo</td>
                    </tr>
                    <tr>
                      
                    </tr>
                  </table>
                </div>  
            </article>
        </section>

        

      </div>
    </>
  )
}

export default Admin
