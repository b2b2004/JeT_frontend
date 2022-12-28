import React, {useEffect} from 'react'
import Navbar from '../component/nav/Navbar'
import CourseCard from '../component/card/Course'
const { kakao } = window;

import './css/courserec.css'


const CourseRec = () => {
    useEffect(()=>{
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(33.45940882944249, 126.9400586643283), // 지도의 중심좌표
                level: 5 // 지도의 확대 레벨
            };
// 지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);
    })
  return (
    <>
        <Navbar/>
        <div className='course-container'>
            <div className='course-title'>
                <h2>이런 코스가 나왓어여</h2>
            </div>
            <div className='course-map'>
            <div id="map" style={{
                width: '800px',
                height: '350px'
            }}></div>
            </div>
            <div className='course-list'>
                <ul>
                    <li>
                        <div class='course-place'>
                            <a href='#none'>관광지</a>
                            <a href='#none'>관광지</a>
                            <a href='#none'>관광지</a>
                            <a href='#none'>관광지</a>
                            <a href='#none'>관광지</a>
                            <a href='#none'>관광지</a>
                            <a href='#none'>관광지</a>
                        </div>
                    </li>
                </ul>
            </div>
        

            <div className='course-detail'>
                <div className='place-title'>
                    <h3>관광지 이름</h3>
                </div>
                <div className='place-detail'>
                    <p>상세 정보</p>
                    
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <hr/>

                <div className='another-rec'>
                    <div className='hotel-container'>
                        <div className='hotel-title'>
                            <h3>주변 숙박</h3>
                        </div>
                        <CourseCard/>
                    </div>
                    <div className='restaurant-container'>
                        <div className='restaurant-title'>
                            <h3>주변 음식점</h3>
                        </div>
                        <CourseCard/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CourseRec
