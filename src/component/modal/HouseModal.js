import asdf from '../../assert/forest_sa.jpg'
import './houseModal.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function HouseModal(){
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
    
    return<>
        <div className="house_modal">
            <div className='store_name'>
                <h2>호텔 이름</h2>
            </div>
            <div className="house_container">
                <div className='house_category'>
                    <p>호텔 카테고리</p>
                </div>
            </div>
            <div className='house_info'>
                <div className='info_input'>
                    <label>Phone</label>
                    <input type="text" disabled></input>
                </div>
            </div>
            <div className="house_img">
                <h3>호텔 대표 사진</h3>
                <Slider {...settings}>
                </Slider>
            </div>
        </div>
    </>
}

export default HouseModal;