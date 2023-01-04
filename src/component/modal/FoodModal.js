import asdf from '../../assert/forest_sa.jpg'
import './foodModal.css'



function FoodModal(){

    return<>
        <div className="food_modal">
            <div className='store_name'>
                <h2>음식점 이름</h2>
            </div>
            <div className="food_store_container">
                <div className='food_category'>
                    <p>음식 카테고리</p>
                </div>
            </div>
            <div className='food_store_info'>
                <div className='info_input'>
                    <label>Phone</label>
                    <input type="text" disabled></input>
                </div>
            </div>
            <div className="food_img">
                <h3>대표 메뉴</h3>
                <img src={asdf} alt='foodImg'/>
            </div>
        </div>
    </>
}

export default FoodModal;