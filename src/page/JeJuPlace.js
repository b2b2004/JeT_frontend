import Navbar from "../component/nav/Navbar";
import '../page/css/jejuplace.css'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function JeJuPlace(){
    const params  = useParams();
    const [jejuData, setJejuData] = useState([]);
    const [Img_url,setImg_url] = useState([]);
    const Authorization = localStorage.getItem("Authorization");
    const [likeplace, setLikeplace] = useState(false);

    useEffect(()=>{
        fetch("http://localhost:8087/board/JejuPlace/" + params.num,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
            .then(res=> res.json())
            .then((res) =>{
                setJejuData(res);
                // 이미지 주소 배열처리
                let emp1 = res.detail_img.replace(/\'/g, '');
                let emp2 = emp1.replace('[', '');
                let emp3 = emp2.replace(']', '');
                setImg_url(emp3.split(','));
            })
    },[])

    useEffect(()=>{
        if(Authorization !== null)
        {
            fetch("http://localhost:8087/user/likePlace",
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8', Authorization
                    },
                })
                .then(res=> res.json())
                .then((res) =>{
                    console.log(res);
                    console.log(jejuData.name);
                    for(let i in res) {
                        if(jejuData.name === res[i].place)
                        {
                            console.log("hi");
                            setLikeplace(true);
                        }
                    }
                })

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
        }
    },[jejuData])

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
        autoplaySpeed: 5000,
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
                                    <p onClick={user_like_place}><div><img src="/images/hea.png" /><a>12</a></div></p> :
                                    <p onClick={user_like_place}><div><img src="/images/hea2.png" /><a>12</a></div></p>) :<></> }
                            </div>
                            <div><img src="/images/vie.png" /><a href="">43</a></div>
                        </li>
                        <li><img src="/images/jj.png" alt="" /></li>
                    </ul>
                </div>

            </div>

            <div className="db_cont_detail">
                <div className="detail_tab">
                    <ul>
                        <li className="select_tab on" id="photoTab"><a href="javascript:tabChange('galleryGo');" title="선택됨"><span>사진보기</span></a></li>
                        <li className="select_tab" id="detailTab"><a href="javascript:tabChange('detailGo');"><span>상세정보</span></a></li>
                        <li className="select_tab" id="recomTab"><a href="javascript:tabChange('relationGo');"><span>댓글</span></a></li>
                    </ul>
                </div>
                    <div id="detailGo">


                        <div className="wrap_imgSlide">
                        <Slider {...settings}>
                            {Img_url.map((Img_url) => (
                                <div key={Img_url}><img src={Img_url} alt="" /> </div>
                            ))}
                        </Slider>
                        </div>

                        <div className="wrap_contView">
                            <h3>상세정보</h3>
                            {/* style="padding-bottom: 54px;" */}
                            <div className="area_txtView top">
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
                    </div>

            </div>
        </div>
    </>
    )
}

export default JeJuPlace;