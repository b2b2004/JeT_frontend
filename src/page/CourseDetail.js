import React, {useEffect, useState} from 'react'
import Navbar  from '../component/nav/Navbar'
import UserCourse from '../component/card/UserCourse'
import './css/coursedetail.css'

const CourseDetail = () => {
    const [courseList,setCourseList] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8087/course/listshow",
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
            .then((res)=> res.json())
            .then((res) =>{
                console.log(res);
                setCourseList(res);
            })

    },[])
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
                {courseList.map((courseList) => (
                    <div onClick={()=>{
                        window.location.href = "/course/"+ courseList.course_num;
                    }}>
                    <UserCourse key={courseList.course_num} courseList={courseList} />
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default CourseDetail
