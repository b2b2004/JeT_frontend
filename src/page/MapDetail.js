import React, {useEffect, useState} from 'react'
import Navbar from '../component/nav/Navbar'
import './css/mapdetail.css'
import MapCard from "../component/card/MapCard";
const { kakao } = window;

function MapDetail() {

    const [jejuData, setJejuData] = useState([]);
    const [pt , setPt] = useState([{
        content: '',
        latlng: '',
        jejuDataNo: ''
    }]);
    let [pageNo,setPageNo] = useState(10);

    useEffect(()=>{

        fetch("http://localhost:8087/board/areaTravel",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(pageNo)
            })
            .then((res)=> res.json())
            .then((res) =>{
                setJejuData(res);
                console.log(res);
                for(let i=0;i<res.length;i++)
                {
                    let img = res[i].detail_img.split(',')[0];
                    img = img.substring(2,img.length-1);
                    let url ='/Jejuplace/'+res[i].jejuDataNo;
                    const onePt ={
                        content: "<div id='detail_card' style=''>"
                            + "<div className='close'>" + "<img className='closeBtn' onClick={document.getElementById('detail_card').style.display='none';} src='/images/Xbox.png' />" + "</div>"
                            + "<img className='abc' src="+ img + "/>"
                            + "<p>" + res[i].name + "</p>"
                            +"<div onClick={window.location.href='"+url+"'}>" + "<a>" + "자세히보기" +"</a>" + "</div>"
                            +"</div>",
                        latlng: new kakao.maps.LatLng(res[i].latitude, res[i].longitude),
                    };
                    pt.push(onePt);
                }
                })
    },[pageNo])


    function kakaoMap(){
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(33.45940882944249, 126.9400586643283), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };
        // 지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);


        for (let i = 0; i < pt.length; i ++) {
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: pt[i].latlng // 마커의 위치
            });

            var overlay = new kakao.maps.CustomOverlay({
                content: pt[i].content,
                map: map,
                position: marker.getPosition()
            });
            overlay.setMap(null);

            kakao.maps.event.addListener(marker, 'click', function() {
                overlay.setMap(map);
                overlay.setContent(pt[i].content);
                overlay.setPosition(pt[i].latlng);
            });
        }

        // 마커를 클릭했을 때 해당 장소의 상세정보를 보여줄 커스텀오버레이입니다
        var placeOverlay = new kakao.maps.CustomOverlay({zIndex:1}),
            contentNode = document.createElement('div'), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다
            markers = [], // 마커를 담을 배열입니다
            currCategory = ''; // 현재 선택된 카테고리를 가지고 있을 변수입니다

// 장소 검색 객체를 생성합니다
        var ps = new kakao.maps.services.Places(map);

// 지도에 idle 이벤트를 등록합니다
        kakao.maps.event.addListener(map, 'idle', searchPlaces);

// 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다
        contentNode.className = 'placeinfo_wrap';

// 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
// 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다
        addEventHandle(contentNode, 'mousedown', kakao.maps.event.preventMap);
        addEventHandle(contentNode, 'touchstart', kakao.maps.event.preventMap);

// 커스텀 오버레이 컨텐츠를 설정합니다
        placeOverlay.setContent(contentNode);

// 각 카테고리에 클릭 이벤트를 등록합니다
        addCategoryClickEvent();

// 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
        function addEventHandle(target, type, callback) {
            if (target.addEventListener) {
                target.addEventListener(type, callback);
            } else {
                target.attachEvent('on' + type, callback);
            }
        }

// 카테고리 검색을 요청하는 함수입니다
        function searchPlaces() {
            if (!currCategory) {
                return;
            }

            // 커스텀 오버레이를 숨깁니다
            placeOverlay.setMap(null);

            // 지도에 표시되고 있는 마커를 제거합니다
            removeMarker();

            ps.categorySearch(currCategory, placesSearchCB, {useMapBounds:true});
        }

// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {

                // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
                displayPlaces(data);
            } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요

            } else if (status === kakao.maps.services.Status.ERROR) {
                // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요

            }
        }

// 지도에 마커를 표출하는 함수입니다
        function displayPlaces(places) {

            // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
            // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
            var order = document.getElementById(currCategory).getAttribute('data-order');



            for ( var i=0; i<places.length; i++ ) {

                // 마커를 생성하고 지도에 표시합니다
                var marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x), order);

                // 마커와 검색결과 항목을 클릭 했을 때
                // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
                (function(marker, place) {
                    kakao.maps.event.addListener(marker, 'click', function() {
                        displayPlaceInfo(place);
                    });
                })(marker, places[i]);
            }
        }

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
        function addMarker(position, order) {
            var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
                imageSize = new kakao.maps.Size(27, 28),  // 마커 이미지의 크기
                imgOptions =  {
                    spriteSize : new kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
                    spriteOrigin : new kakao.maps.Point(46, (order*36)), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                    offset: new kakao.maps.Point(11, 28) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
                },
                markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
                marker = new kakao.maps.Marker({
                    position: position, // 마커의 위치
                    image: markerImage
                });

            marker.setMap(map); // 지도 위에 마커를 표출합니다
            markers.push(marker);  // 배열에 생성된 마커를 추가합니다

            return marker;
        }

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
        function removeMarker() {
            for ( var i = 0; i < markers.length; i++ ) {
                markers[i].setMap(null);
            }
            markers = [];
        }

// 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
        function displayPlaceInfo (place) {
            var content = '<div class="placeinfo">' +
                '   <a class="title" href="' + place.place_url + '" target="_blank" title="' + place.place_name + '">' + place.place_name + '</a>';

            if (place.road_address_name) {
                content += '    <span title="' + place.road_address_name + '">' + place.road_address_name + '</span>' +
                    '  <span class="jibun" title="' + place.address_name + '">(지번 : ' + place.address_name + ')</span>';
            }  else {
                content += '    <span title="' + place.address_name + '">' + place.address_name + '</span>';
            }

            content += '    <span class="tel">' + place.phone + '</span>' +
                '</div>' +
                '<div class="after"></div>';

            contentNode.innerHTML = content;
            placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
            placeOverlay.setMap(map);
        }


// 각 카테고리에 클릭 이벤트를 등록합니다
        function addCategoryClickEvent() {
            var category = document.getElementById('category'),
                children = category.children;

            for (var i=0; i<children.length; i++) {
                children[i].onclick = onClickCategory;
            }
        }

// 카테고리를 클릭했을 때 호출되는 함수입니다
        function onClickCategory() {
            var id = this.id,
                className = this.className;

            placeOverlay.setMap(null);

            if (className === 'on') {
                currCategory = '';
                changeCategoryClass();
                removeMarker();
            } else {
                currCategory = id;
                changeCategoryClass(this);
                searchPlaces();
            }
        }

// 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
        function changeCategoryClass(el) {
            var category = document.getElementById('category'),
                children = category.children,
                i;

            for ( i=0; i<children.length; i++ ) {
                children[i].className = '';
            }

            if (el) {
                el.className = 'on';
            }
        }





//         var linePath = [];
//         fetch("api/map-direction/v1/driving?start=126.9400586643283,33.45940882944249&goal=126.4254687809713,33.238875051740656&option=trafast",
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
// // 지도에 선을 표시합니다
//                 polyline.setMap(map);
//             })
    }

    useEffect(()=>{
        kakaoMap();
    },[jejuData, pt]);

  return (
    <div>
        <Navbar/>
        <div className="all_wrap">
        <div className="list_wrap">
            <ul>
                {jejuData.map((jejuData, num) => (
                    <div onClick={()=>{
                        console.log(num);
                        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                            mapOption = {
                                center: new kakao.maps.LatLng(pt[num+1].latlng.getLat(), pt[num+1].latlng.getLng()), // 지도의 중심좌표
                                level: 8 // 지도의 확대 레벨
                            };
                        // 지도를 생성합니다
                        var map = new kakao.maps.Map(mapContainer, mapOption);

                        for (let i = 0; i < pt.length; i ++) {
                            // 마커를 생성합니다
                            var marker = new kakao.maps.Marker({
                                map: map, // 마커를 표시할 지도
                                position: pt[i].latlng // 마커의 위치
                            });

                            if((num+1) === i)
                            {
                                var overlay = new kakao.maps.CustomOverlay({
                                    content: pt[num+1].content,
                                    map: map,
                                    position: pt[num+1].latlng
                                });
                            }
                        kakao.maps.event.addListener(marker, 'click', function() {
                            overlay.setMap(map);
                            overlay.setContent(pt[i].content);
                            overlay.setPosition(pt[i].latlng);
                        });
                        }

                    }}>
                    <MapCard key={jejuData.JejuDataNo} jejuData={jejuData} />
                    </div>
                ))}
            </ul>
        </div>
        <div className="map_wrap">
            <div id="map" style={{
                width: '100%',
                height: '100%',
                position: "relative",
                overflow: "hidden"
            }}></div>

            <ul id="category">
                <li id="AD5" data-order="3">
                    <span className="category_bg oil"></span>
                    숙박
                </li>
                <li id="FD6" data-order="4">
                    <span className="category_bg cafe"></span>
                    음식점
                </li>
                <li id="CE7" data-order="4">
                    <span className="category_bg cafe"></span>
                    카페
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default MapDetail;