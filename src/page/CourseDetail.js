import React from 'react'
import Navbar  from '../component/nav/Navbar'
import UserCourse from '../component/card/UserCourse'

import './css/coursedetail.css'

const CourseDetail = () => {
  return (
    <>
        <Navbar/>
        <div className='userCourse-container'>
            <div className='userCourse-wrap'>
              <div className='userCourse-title'>
                <h2>🚗 사용자가 다녀온 코스</h2>
              </div>
              <hr/>
              <div className='uc-btns'>
                <button className='uc-btn'>인기순</button>
                <button className='uc-btn'>최신순</button>
              </div>
              <UserCourse/>
            </div>
        </div>
    </>
  )
}

export default CourseDetail
