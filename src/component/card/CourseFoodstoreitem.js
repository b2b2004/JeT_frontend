import React from 'react'

function CourseFoodstoreitem (props) {

    const {foodimg_src , store_name} = props.foodstore;
    return (
        <>
            <li className='another_item'>
                <div className='ano_item_pic'>
                    <img className='ano_item_img' alt='Ano Img'
                         src={foodimg_src}
                    ></img>
                </div>
                <div className='ano_item_info'>
                    <div className='place_name'>
                        <p>{store_name}</p>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CourseFoodstoreitem;
