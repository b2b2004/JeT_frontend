import React, {useEffect, useState} from 'react'
import Navbar  from '../component/nav/Navbar'
import UserCourse from '../component/card/UserCourse'
import './css/coursedetail.css'

const CourseDetail = () => {
    const [courseList,setCourseList] = useState([]);
    const [bs,setBs] = useState(false);
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
                setBs(true);
                setCourseList(res);
            })
    },[])

    const newest = () => {
            fetch("http://localhost:8087/course/newestlistshow",
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                })
                .then((res)=> res.json())
                .then((res) =>{
                    console.log(res);
                    setBs(false);
                    setCourseList(res);
                })
    }
    const best = () => {
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
                setBs(true);
                setCourseList(res);
            })
    }
  return (
    <>
        <Navbar/>
        <div className='userCourse-container'>
            <div className='userCourse-wrap'>
              <div className='userCourse-title'>
                <h2>π μ¬μ©μκ° μΆμ² λ°μ μ½μ€</h2>
              </div>
              <hr/>
              <div className='uc-btns'>
                  {bs === true ?
                      <>
                      <button onClick={best} className='uc1-btn' >μΈκΈ°μ</button>
                      <button onClick={newest} className='uc-btn'>μ΅μ μ</button></>:
                      <>
                      <button onClick={best} className='uc-btn' >μΈκΈ°μ</button>
                      <button onClick={newest} className='uc1-btn'>μ΅μ μ</button>
                      </>}
              </div>
                <ul className='uc-all'>
                {courseList.map((courseList) => (
                    <div onClick={()=>{window.location.href = "/course/"+ courseList.course_num;}}>
                    <UserCourse key={courseList.course_num} courseList={courseList} />
                    </div>
                ))}
                </ul>
            </div>
        </div>
    </>
  )
}

export default CourseDetail
