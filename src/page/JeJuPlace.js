import Navbar from "../component/nav/Navbar";
import '../page/css/jejuplace.css'
import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlaceReview from "../component/jejuplace/PlaceReview";

function JeJuPlace(){

    const params  = useParams();
    const [jejuData, setJejuData] = useState([]);
    const [Img_url,setImg_url] = useState([]);
    const Authorization = localStorage.getItem("Authorization");
    const [likeplace, setLikeplace] = useState(false);
    const [sendreview, setSendReview] = useState({
        place_num: params.num,
        content: "",
    });
    const [review, setReview] = useState([]);

    useEffect(()=>{
        // 관광지 데이터 불러오기
        fetch("http://localhost:8087/board/JejuPlace/information/" + params.num,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
            .then(res=> res.json())
            .then((res) =>{
                console.log(res);
                setJejuData(res);
                // 이미지 주소 배열처리
                let emp1 = res.detail_img.replace(/\'/g, '');
                let emp2 = emp1.replace('[', '');
                let emp3 = emp2.replace(']', '');
                setImg_url(emp3.split(','));
            })

        // 해당 관광지 리뷰 불러오기
        fetch("http://localhost:8087/board/JejuPlace/review/" + params.num,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
            .then(res=> res.json())
            .then((res) =>{
                setReview(res);
            })
    },[])

    useEffect(()=>{
        if(Authorization !== null)
        {
            // 좋아요 상태확인
            fetch("http://localhost:8087/user/likePlace",
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8', Authorization
                    },
                })
                .then(res=> res.json())
                .then((res) =>{
                    for(let i in res) {
                        if(jejuData.name === res[i].place)
                        {
                            setLikeplace(true);
                        }
                    }
                })
        }

        // kakao map
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(jejuData.latitude, jejuData.longitude), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };
        const map = new kakao.maps.Map(mapContainer, mapOption);
        // 마커가 표시될 위치입니다
        const markerPosition = new kakao.maps.LatLng(jejuData.latitude, jejuData.longitude);
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);


    },[jejuData])

    // 좋아요 눌렀을때
    const user_like_place = () =>{
        if(likeplace === true)
        {
            setLikeplace(false);
        }else
        {
            setLikeplace(true);
        }
        fetch("http://localhost:8087/user/likePlace",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
                body: jejuData.name
            })
            .then((res)=> res.text())
            .then((res) =>{
                location.reload();
            })
    }

    const chageValue = (e) =>{
        setSendReview({
            ...sendreview,
            [e.target.name]: e.target.value,
        });

    }

    // 리뷰 등록
    const sendReview = () =>{
        fetch("http://localhost:8087/board/JejuPlace/review",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
                body: JSON.stringify(sendreview)
            })
            .then((res)=> res.json())
            .then((res) =>{
                if(res === 1)
                {
                    alert("리뷰 등록 성공");
                    location.reload();
                }else if(res === 2)
                {
                    alert("리뷰 등록 실패");
                    location.reload();
                }else if(res === 3)
                {
                    alert("로그인 상태가 아닙니다.");
                    window.location.href = "/login";
                }
            })
    }

    // slider 설정
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };

    return(
    <>
        <Navbar/>
        <div id="contents">
            <div className="titleType1">
                <h2 id="topTitle">{jejuData.name}</h2>
                <div className="area_address" id="topAddr"><span>제주 {jejuData.address}</span></div>
                <div className="dbDetail titBg" id="topCp">
                    <div className="titTypeWrap">
                        <h3>
                            <em>걸출한 일출 포인트</em>
                        </h3>
                    </div>
                </div>

                <div className="post_area">
                    <ul>
                        <li>
                            <div>
                                {Authorization !== null ? ( likeplace === false ?
                                    <p onClick={user_like_place}><div><img src="/images/hea.png" /><a>{jejuData.real_like_num}</a></div></p> :
                                    <p onClick={user_like_place}><div><img src="/images/hea2.png" /><a>{jejuData.real_like_num}</a></div></p>) :
                                    <p><div><img src="/images/hea.png" /><a>{jejuData.real_like_num}</a></div></p>}
                            </div>
                            <div><img src="/images/vie.png" /><a href="">{jejuData.real_lookup_num}</a></div>
                        </li>
                        <li><img src="/images/jj.png" alt="" /></li>
                    </ul>
                </div>

            </div>

            <div className="db_cont_detail">
                <div className="detail_tab">
                    <ul>
                        <li className="select_tab on" id="photoTab"><a href='#change_img' title="선택됨"><span>사진보기</span></a></li>
                        <li className="select_tab" id="detailTab"><a href='#change_detail'><span>상세정보</span></a></li>
                        <li className="select_tab" id="recomTab"><a href='#change_review'><span>댓글</span></a></li>
                    </ul>
                </div>

                    <div id="detailGo">

                        <div className="wrap_imgSlide" id="change_img">
                        <Slider {...settings}>
                            {Img_url.map((Img_url) => (
                                <div key={Img_url}><img src={Img_url} alt="" /> </div>
                            ))}
                        </Slider>
                        </div>

                        <div className="wrap_contView">
                            <h3>상세정보</h3>
                            {/* style="padding-bottom: 54px;" */}
                            <div className="area_txtView top" id="change_detail">
                                {/* style="overflow: hidden; height: 150px;" */}
                                <div className="inr_wrap">
                                    <div className="inr">
                                        <p>{jejuData.moreinfo}<br /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="surroundingsMap" id="detailGo">
                                <div id="map"></div>
                            </div>

                            <div className="wrap_contView" id="detailinfoview">
                                <div className="area_txtView bottom">
                                    {/* style="padding-bottom: 54px;" */}
                                    <div className="inr_wrap">
                                        {/* style="overflow: hidden; height: 150px;" */}
                                        <div className="inr">
                                            <ul>
                                                <li><strong>문의 및 안내</strong><span className="pc">{jejuData.phone}</span></li>
                                                <li><strong>편의시설</strong><span>{jejuData.facilities}</span>
                                                </li>
                                                <li><strong>주소</strong><span>{jejuData.address}</span></li>
                                                <li>
                                                    <strong>이용시간</strong><span>{jejuData.usage_time}</span>
                                                </li>
                                                <li><strong>특이사항</strong><span>{jejuData.detail_info}</span></li>
                                                <li><strong>입 장 료</strong><span>개인 - 성인 {jejuData.adult_price}원 / 청소년, 군인 {jejuData.teenager_price}원 / 어린이 {jejuData.children_price}원<br /></span> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <h2 className="reviewSpan" id="change_review"> 댓글 </h2>
                        <div id="review">
                                {Authorization === null ?
                                    <>
                                    <textarea placeholder="로그인 시 댓글 등록이 가능합니다."></textarea>
                                    <button className="btn1" onClick={()=>{window.location.href = "/login";}}>로그인</button>
                                    </>
                                    :
                                    <>
                                    <textarea placeholder="최대 1000자 까지 입력 가능합니다." name="content" onChange={chageValue}></textarea>
                                    <button className="btn1" onClick={sendReview}>등록</button>
                                    </>
                                }
                        </div>
                        <div id="reviewlist">
                            <ul>
                                {review.map((review) => (
                                    <PlaceReview key={review.review_num} review={review} />
                                ))}
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </>
    )
}

export default JeJuPlace;