import React from 'react'
import './usercorse.css'
import ima from "../../assert/forest_sa.jpg";
import {BiDotsVertical, BiLaugh, BiPlusCircle} from "react-icons/bi";

const UserCourse = (props) => {
    const {name1,name2,name3,name4,name5,name6,name7} = props.courseList;
    let img = props.courseList.imgUrl.split(',')[0];
    img = img.substring(2,img.length-1);
  return (
        <li>
            <div className='uc-container'>
                <div className='uc-wrap'>
                    <div className='uc-img'>
                        <img src={img}/>
                    </div>
                    <div className='uc-text'>
                        <div className='uc-sub'>
                            <div><BiLaugh size='20'/></div>
                            <div>
                                <input id="dropdown" type="checkbox"/>
                                <label className="dropdownLabel" htmlFor="dropdown">
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
                            <h2>사용자 추천 코스</h2>
                        </div>
                        <div className='uc-course'>
                            <h6>경유지</h6>
                            <div className='waypoint-container'>
                                <ul>
                                    <li>
                                        <div className='waypoint'>
                                            <BiPlusCircle size='12'/>
                                            <p>{name1}</p>
                                        </div>
                                        <div className='waypoint'>
                                            <BiPlusCircle size='12'/>
                                            <p>{name2}</p>
                                        </div>
                                        <div className='waypoint'>
                                            <BiPlusCircle size='12'/>
                                            <p>{name3}</p>
                                        </div>
                                        <div className='waypoint'>
                                            <BiPlusCircle size='12'/>
                                            <p>{name4}</p>
                                        </div>
                                        {name5 !== undefined ?
                                            <div className='waypoint'>
                                                <BiPlusCircle size='12'/>
                                                <p>{name5}</p>
                                            </div> :
                                            <></>}
                                        {name6 !== undefined ?
                                            <div className='waypoint'>
                                            <BiPlusCircle size='12'/>
                                            <p>{name6}</p>
                                            </div> :
                                            <></>}

                                        {name7 !== undefined ?
                                            <div className='waypoint'>
                                                <BiPlusCircle size='12'/>
                                                <p>{name7}</p>
                                            </div> :
                                            <></>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
  )
}

export default UserCourse
