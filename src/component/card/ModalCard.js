import React from 'react'
import "./modalcard.css"

const ModalCard = (props) => {
  const {name} = props.jejuData;
  let img = props.jejuData.detail_img.split(',')[0];
  img = img.substring(2,img.length-1);
  return (
      <li>
        <div className='modalCard'>
          <div className='checkbox'>
            <input type='checkbox'></input>
          </div>
          <div className='img-container'>
            <div className='img-inner'>
              <div className='inner-skew'>
                <img src={img}></img>
              </div>
            </div>
          </div>
          <div className='text-container'>
            <h3>{name}</h3>
          </div>
        </div>
      </li>
  )
}

export default ModalCard;