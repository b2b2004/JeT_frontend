import React, {useEffect, useState} from 'react'
import Navbar from '../component/nav/Navbar'
const { kakao } = window;
import './css/courserec.css'
import {useParams} from "react-router-dom";
import CourseName from "../component/course/CourseName";
import CourseFoodstoreitem from "../component/card/CourseFoodstoreitem";
import CourseAccommodationitem from "../component/card/CourseAccommodationitem";
import Modal from "../component/modal/Modal";
import HouseAndFoodModal from "../component/modal/HouseAndFoodModal";
import {useDispatch, useSelector} from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import {
    setModalVisible,
    setCurrentStep,
    setCurrentStep1,
    clearStep,
    set_address,
    set_category, set_foodimg_src, set_store_name, set_star, set_phone
} from "../store/FoodStoreStep";
import {
    set_Accommodation_address,
    set_Accommodation_guide, set_Accommodation_img_src,
    set_Accommodation_name,
    set_Accommodation_phone, set_Accommodation_rating, set_Accommodation_service, set_Accommodation_type
} from "../store/AccommodationStep";
import {BiDotsVertical} from "react-icons/bi";
import Swal from "sweetalert2";

const CourseRec = () => {
    const params  = useParams();
    const [name, setName] = useState([]);
    const [user,setUser] = useState({});
    const [recuser,setRecUser] = useState({});
    const [place, setPlace] = useState([]);
    const [foodstore , setFoodstore] = useState([]);
    const [accommodation , setAccommodation] = useState([]);
    const modalVisible = useSelector((state) => state.FoodStoreStep.modalVisible);
    const dispatch = useDispatch();
    const Authorization = localStorage.getItem("Authorization");
    const [likeCourse, setLikeCourse] = useState(false);
    const [lookup_num, setLookup_num] = useState(0);
    const [like_num, setLike_num] = useState(0);
    const [course_num, setCourse_num] = useState(0);
    const [root , setRoot] = useState({
        ways : '',
        start : '',
        end : '',
    })
    const [pt , setPt] = useState([{
        content: '',
        latlng: ''
    }]);
    const closeModal = () => {
        document.body.style.overflow = "auto";
        dispatch(setModalVisible(false));
    };
    const openModal = (foodstore) => {
        console.log(foodstore);
        document.body.style.overflow = "hidden";
        dispatch(set_address(foodstore.address));
        dispatch(set_category(foodstore.category));
        dispatch(set_foodimg_src(foodstore.foodimg_src));
        dispatch(set_star(foodstore.star));
        dispatch(set_store_name(foodstore.store_name));
        dispatch(set_phone(foodstore.phone));
        dispatch(setCurrentStep());
        dispatch(setModalVisible(true));
    };

    const openModal1 = (accommodation) => {
        dispatch(set_Accommodation_address(accommodation.address));
        dispatch(set_Accommodation_guide(accommodation.guide));
        dispatch(set_Accommodation_name(accommodation.name));
        dispatch(set_Accommodation_phone(accommodation.phone));
        dispatch(set_Accommodation_rating(accommodation.rating));
        dispatch(set_Accommodation_service(accommodation.service));
        dispatch(set_Accommodation_type(accommodation.type));
        dispatch(set_Accommodation_img_src(accommodation.img_src));
        document.body.style.overflow = "hidden";
        dispatch(setCurrentStep1());
        dispatch(setModalVisible(true));
    };

    useEffect(()=>{
                if(Authorization !== null)
                {
                    // 좋아요 상태확인
                    fetch("http://localhost:8087/course/likeCourse",
                        {
                            method: "GET",
                            headers: {
                                'Content-Type': 'application/json; charset=utf-8', Authorization
                            },
                        })
                        .then(res=> res.json())
                        .then((res) =>{
                            for(let i=0;i<res.length;i++) {
                                if(params.num == res[i].course_num)
                                {

                                    setLikeCourse(true);
                                }
                            }
                        })

                    fetch(
                        'http://localhost:8087/user/loginuser', {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json; charset=utf-8', Authorization
                            },
                        }
                    )
                        .then((res) => res.json())
                        .then((res) => {
                            if(res.status === 500)
                            {
                                localStorage.clear();
                            }
                            setUser(res);
                        })
                }


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
                    setLookup_num(res.lookup_num);
                    setLike_num(res.like_num);
                    setCourse_num(res.course_num);
                    setRecUser(res.userId);
                    showDetail(res.name[0]);
                    // Naver Map Direction Api에 맞는 주소를 공급하기 위한 처리 과정
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
    },[])

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
                setPlace(res);
            })

        fetch("http://localhost:8087/course/foodlist",
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
                setFoodstore(res);
            })

        fetch("http://localhost:8087/course/Houselist",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: name
            })
            .then((res)=> res.json())
            .then((res) =>{
                setAccommodation(res);
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

    // 좋아요 눌렀을때
    const like_course = () =>{
        if(likeCourse === true)
        {
            setLikeCourse(false);
        }else
        {
            setLikeCourse(true);
        }
        fetch("http://localhost:8087/course/likeCourse",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
                body: course_num
            })
            .then((res)=> res.text())
            .then((res) =>{
                location.reload();
            })
    }

    const deleteCourse = () =>{

        Swal.fire({
            icon: 'warning',
            title: '코스를 삭제하시겠습니까?',
            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
            confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
            cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
            confirmButtonText: '확인', // confirm 버튼 텍스트 지정
            cancelButtonText: '취소', // cancel 버튼 텍스트 지정
        }).then(result => {
            if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
                fetch("http://localhost:8087/course/deleteCourse",
                    {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                        },
                        body: course_num
                    })
                    .then((res) => res.text())
                    .then((res) => {
                        if (res == 1) {
                            Swal.fire({icon: 'success', title: '코스 삭제 성공'}).then(() => {
                                window.location.href = "/courseDetail";
                            });
                        } else {
                            Swal.fire({icon: 'error', title: '코스 삭제 실패'}).then(() => {
                                window.location.reload();
                            });
                        }
                    })
            }
        })
    }

  return (
    <>
        <Navbar/>
        <div className='course-container'>
            <div className='course-title'>
                <h2>이런 코스가 나왔어요</h2>
            </div>

            <div className='like_wrap'>
                <div>
                    {Authorization !== null ? ( likeCourse === false ?
                            <p onClick={like_course}><div><img src="/images/hea.png" /><a>{like_num}</a></div></p> :
                            <p onClick={like_course}><div><img src="/images/hea2.png" /><a>{like_num}</a></div></p>) :
                            <p><div><img src="/images/hea.png" /><a>{like_num}</a></div></p>}
                </div>
                <div>
                    <img src="/images/vie.png" /><a href="">{lookup_num}</a>
                </div>

                {recuser == user.userId ?
                    <div className='gar1'>
                        <RiDeleteBinLine size="25" onClick={deleteCourse}/>
                    </div>
                    :
                    <></>
                }

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
                        <ul className='ul_list'>
                        {accommodation.map((accommodation) => (
                            <div onClick={()=>{openModal1(accommodation)}}>
                                <CourseAccommodationitem key={accommodation.accommodation_id} accommodation={accommodation}/>
                            </div>
                        ))}
                        </ul>
                    </div>
                    <div className='restaurant-container'>
                        <div className='restaurant-title'>
                            <h3>주변 음식점</h3>
                        </div>
                        <ul className='ul_list'>
                        {foodstore.map((foodstore) => (
                            <div onClick={()=>{openModal(foodstore)}}>
                                <CourseFoodstoreitem key={foodstore.store_no} foodstore={foodstore}/>
                            </div>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <Modal visible={modalVisible} name="FoodStoreStep" onClose={closeModal}>
            <HouseAndFoodModal handleClose={closeModal} tabIndex={0}></HouseAndFoodModal>
        </Modal>

    </>
  )
}

export default CourseRec;
