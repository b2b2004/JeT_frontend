import './foodModal.css'
import {useSelector} from "react-redux";


function FoodModal(){
    const FoodData = useSelector((state) => state.FoodStoreStep);
    return<>
        <div className="food_modal">
                <div className='store_name'>
                    <h2>{FoodData.store_name}</h2>
                </div>
                <div className='food_category_bar'>
                    <p className="p_t">별점:</p><p> {FoodData.star} / 5.0</p>
                </div>
                <div className="food_img">
                    <img src={FoodData.foodimg_src} alt='foodImg'/>
                </div>
            <div className="food_store_container">
                <div className='food_category'>
                    <p className="p_t">주소:</p><p> {FoodData.address}</p>
                </div>
                <div className='food_category'>
                    <p className="p_t">카테고리:</p><p> {FoodData.category}</p>
                </div>
                <div className='food_category'>
                    <p className="p_t">phone:</p><p> {FoodData.phone}</p>
                </div>
            </div>
        </div>
    </>
}

export default FoodModal;