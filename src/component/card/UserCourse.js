import React from 'react'
import './usercorse.css'
import ima from "../../assert/forest_sa.jpg";
import {BiDotsVertical, BiLaugh, BiPlusCircle} from "react-icons/bi";

const UserCourse = (props) => {
    console.log(props);
    const {name1,name2,name3,name4,name5,name6,name7, userId} = props.courseList;
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
                        <div><BiLaugh size='20'/></div>
                        <div className='uc-text-title'>
                            <h3>{userId}님 추천 코스</h3>
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
                                        {name4 !== undefined ?
                                            <div className='waypoint'>
                                                <BiPlusCircle size='12'/>
                                                <p>{name4}</p>
                                            </div> :
                                            <></>}
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
