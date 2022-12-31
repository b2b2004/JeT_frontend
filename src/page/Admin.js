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
                거기에 따른 페이지...?
            </article>
        </section>

        

      </div>
    </>
  )
}

export default Admin
