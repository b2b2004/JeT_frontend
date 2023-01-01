import React, {useEffect, useState} from 'react'
import Navbar from '../component/nav/Navbar'
import CourseCard from '../component/card/Course'
const { kakao } = window;
import './css/courserec.css'
import {useParams} from "react-router-dom";
import Card from "../component/card/Card";
import CourseName from "../component/course/CourseName";


const CourseRec = () => {
    const params  = useParams();
    const [name, setName] = useState([]);
    const [place, setPlace] = useState([]);
    const [root , setRoot] = useState({
        ways : '',
        start : '',
        end : '',
    })
    const [pt , setPt] = useState([{
        content: '',
        latlng: ''
    }]);
    useEffect(()=>{
            fetch("http://localhost:8087/course/show/" + params.num,
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                })
                .then((res)=> res.json())
                .then((res) =>{
                    console.log(res);
                    setName(res.name);
                    root.ways = '';
                    root.start = '';
                    root.end = '';
                    for(let i=0;i<res.Latitude.length-1;i++)
                    {
                        root.ways = root.ways.concat(res.Longitude[i] + ",");
                        root.ways = root.ways.concat(res.Latitude[i] + "|");
                    }

                    for(let i=0;i<res.Latitude.length;i++)
                    {
                        const positions = {
                            name:"<div>"+res.name[i]+"</div>",
                            latlng: new kakao.maps.LatLng(res.Latitude[i], res.Longitude[i])
                        }
                        pt.push(positions);
                    }

                    root.start = root.start.concat(res.Longitude[0] + ",");
                    root.start = root.start.concat(res.Latitude[0]);
                    root.end = root.end.concat(res.Longitude[res.Longitude.length-1] + ",");
                    root.end = root.end.concat(res.Latitude[res.Latitude.length-1]);

                    MapStart();
                })
    },[place])

    function MapStart(){
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(33.37094713248983, 126.5314773683663), // 지도의 중심좌표
                level: 10 // 지도의 확대 레벨
            };
// 지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);
        for (let i = 0; i < pt.length; i++) {
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: pt[i].latlng // 마커의 위치
            });


            // 마커에 표시할 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: pt[i].name // 인포윈도우에 표시할 내용
            });

            // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
            // 이벤트 리스너로는 클로저를 만들어 등록합니다
            // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
            kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
            kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        }
        var linePath = [];
//         fetch("http://localhost:3000/api/map-direction-15/v1/driving?start="+root.start+"&waypoints="+root.ways+"&goal="+root.end+"&option=trafast",
//             {
//                 method: "GET",
//                 headers: {
//                     'Content-Type': 'application/json; charset=utf-8',
//                     'X-NCP-APIGW-API-KEY-ID': '808ccfqjww',
//                     'X-NCP-APIGW-API-KEY': 'PyLBSjXZOMbBNKaAOOCeqsV4L38m5bMdyqUAG8WP',
//                 },
//             })
//             .then((res)=> res.json())
//             .then((res)=>{
//                 console.log(res);
//                 for(let i=0; i<res.route.trafast[0].path.length;i++)
//                 {
//                     linePath.push(new kakao.maps.LatLng(res.route.trafast[0].path[i][1], res.route.trafast[0].path[i][0]));
//                 }
// // 지도에 표시할 선을 생성합니다
//                 var polyline = new kakao.maps.Polyline({
//                     path: linePath, // 선을 구성하는 좌표배열 입니다
//                     strokeWeight: 5, // 선의 두께 입니다
//                     strokeColor: '#e80e0e', // 선의 색깔입니다
//                     strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
//                     strokeStyle: 'solid' // 선의 스타일입니다
//                 });
//
//                 polyline.setMap(map);
//             })
    }

    function showDetail(name){
        fetch("http://localhost:8087/board/JejuPlace/name",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: name
            })
            .then((res)=> res.json())
            .then((res) =>{
                console.log(res);
                setPlace(res);
            })
    }

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
        return function() {
            infowindow.open(map, marker);
        };
    }

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
        return function() {
            infowindow.close();
        };
    }

  return (
    <>
        <Navbar/>
        <div className='course-container'>
            <div className='course-title'>
                <h2>이런 코스가 나왓어여</h2>
            </div>
            <div className='course-map'>
            <div id="map" style={{
                width: '1000px',
                height: '400px'
            }}></div>
            </div>
            <div className='course-list'>
                <ul>
                    <li>
                        <div class='course-place'>
                            {name.map((name) => (
                                <a onClick={() => showDetail(name)}>
                                    <CourseName key={name} name={name}/>
                                </a>
                            ))}
                        </div>
                    </li>
                </ul>
            </div>
        

            <div className='course-detail'>
                <div className='place-title'>
                    <h3>{place.name}</h3>
                </div>
                <div className='place-detail'>
                    <p>상세 정보</p>
                    
                    <p>{place.moreinfo}</p>
                </div>
                <hr/>

                <div className='another-rec'>
                    <div className='hotel-container'>
                        <div className='hotel-title'>
                            <h3>주변 숙박</h3>
                        </div>
                        <CourseCard />
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
