import React from 'react'

function CourseAccommodationitem (props) {

    const {img_src, name} = props.accommodation;
    return (
        <>
            <li className='another_item'>
                <div className='ano_item_pic'>
                    <img className='ano_item_img' alt='Ano Img'
                         src={img_src}
                    ></img>
                </div>
                <div className='ano_item_info'>
                    <div className='place_name'>
                        <p>{name}</p>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CourseAccommodationitem;
