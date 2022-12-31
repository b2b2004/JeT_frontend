import React from 'react'
import im from '../../assert/jeju_il.jpg'


function Courseitem () {

    const closeModal = () => {
          document.body.style.overflow = "auto";
          dispatch(setModalVisible(false));
      };
      const openModal = () => {
          setI
      };

  return (
    <>
      <li className='another_item' onClick={openModal}>
        <div className='ano_item_pic'>
           <img className='ano_item_img' alt='Ano Img'
           src={im}
           ></img> 
        </div>
        <div className='ano_item_info'>
            <div className='place_name'>
                <p>ㅁㄴㅇㄹ</p>
            </div>
        </div>
      </li>
    </>
  )
}

export default Courseitem
