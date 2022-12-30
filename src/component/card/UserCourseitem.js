import React from 'react'
import { BiLaugh, BiPlusCircle, BiDotsVertical } from "react-icons/bi";

import ima from '../../assert/forest_sa.jpg'

const UserCourseitem = () => {

  return (
    <>
      <li>
        <div className='uc-container'>
          <div className='uc-wrap'>
            <div className='uc-img'>
              <img src={ima}/>
            </div>
            <div className='uc-text'>
              <div className='uc-sub'>
                <div><BiLaugh size='20'/></div>
                <div>
                  <input id="dropdown" type="checkbox" />
                  <label className="dropdownLabel" for="dropdown">
                    <BiDotsVertical size='20'/>
                  </label>
                  <div className="dropdown-content">
                    <ul>
                      <li>수정</li>
                      <li>삭제</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='uc-text-title'>
                <h2>코스 이름</h2>
              </div>
              <div className='uc-course'>
                <h6>경유지</h6>
                <div className='waypoint-container'>
                  <ul>
                    <li>
                        <div className='waypoint'>
                          <BiPlusCircle size='12'/>
                          <p>관광지</p>
                        </div>
                        <div className='waypoint'>
                          <BiPlusCircle size='12'/>
                          <p>관광지</p>
                        </div>
                        <div className='waypoint'>
                          <BiPlusCircle size='12'/>
                          <p>관광지</p>
                        </div>
                        <div className='waypoint'>
                          <BiPlusCircle size='12'/>
                          <p>관광지</p>
                        </div>
                        <div className='waypoint'>
                          <BiPlusCircle size='12'/>
                          <p>관광지</p>
                        </div>
                        <div className='waypoint'>
                          <BiPlusCircle size='12'/>
                          <p>관광지</p>
                        </div>
                        <div className='waypoint'>
                          <BiPlusCircle size='12'/>
                          <p>관광지</p>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default UserCourseitem
