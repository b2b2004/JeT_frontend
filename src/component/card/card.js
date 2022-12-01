import React from 'react'
import "./card.css"

import cardImg from '../../assert/forest_sa.jpg'

function card() {
  return (
    <div className='Ca'>
      <div className='card-container'>
        <div className='card-wrapper'>
          <div className='card-img'>
            <img src={cardImg} alt='cardImg'></img>
          </div>
          <div className='card-content'>
            <h4>지역이름</h4>
            <p>지역설명</p>
          </div>
        </div>
      </div>
      <div className='card-container'>
        <div className='card-wrapper'>
          <div className='card-img'>
            <img src={cardImg} alt='cardImg'></img>
          </div>
          <div className='card-content'>
            <h4>지역이름</h4>
            <p>지역설명</p>
          </div>
        </div>
      </div>
      <div className='card-container'>
        <div className='card-wrapper'>
          <div className='card-img'>
            <img src={cardImg} alt='cardImg'></img>
          </div>
          <div className='card-content'>
            <h4>지역이름</h4>
            <p>지역설명</p>
          </div>
        </div>
      </div>
      <div className='card-container'>
        <div className='card-wrapper'>
          <div className='card-img'>
            <img src={cardImg} alt='cardImg'></img>
          </div>
          <div className='card-content'>
            <h4>지역이름</h4>
            <p>지역설명</p>
          </div>
        </div>
      </div>
      <div className='card-container'>
        <div className='card-wrapper'>
          <div className='card-img'>
            <img src={cardImg} alt='cardImg'></img>
          </div>
          <div className='card-content'>
            <h4>지역이름</h4>
            <p>지역설명</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card
