import './houseModal.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useSelector} from "react-redux";


function HouseModal(){
    const AccommodationData = useSelector((state) => state.AccommodationStep);
    return<>
        <div className="house_modal">
            <div className='store_name'>
                <h2>{AccommodationData.name}</h2>
            </div>
            <div className='house_category_bar'>
                <p>평점 {AccommodationData.rating} / 5.0</p>
            </div>
            <div className="house_img">
                <img src={AccommodationData.img_src} alt="houseImg" />
            </div>
            <div className="house_container">
                <div className='house_category'>
                    <p className='p_t'>카테고리:</p><p>{AccommodationData.type}</p>
                </div>
                <div className='house_category'>
                    <p className='p_t'>주소:</p><p>{AccommodationData.address}</p>
                </div>
                <div className='house_category'>
                    <p className='p_t'>안내:</p><p>{AccommodationData.guide}</p>
                </div>
                <div className='house_category'>
                    <p className='p_t'>전화번호:</p><p>{AccommodationData.phone}</p>
                </div>
                <div className='house_category'>
                    <p className='p_t'>서비스:</p><p>{AccommodationData.service}</p>
                </div>
            </div>
        </div>
    </>
}

export default HouseModal;