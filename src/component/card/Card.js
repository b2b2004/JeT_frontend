import React from 'react'
import Carditem from './Carditem'
import "./card.css"

function Card(props) {

  let img = props.jejuData.detail_img.split(',')[0];
  img = img.substring(2,img.length-1);
  return (
      <ul className='card_items'>
            <Carditem
            src={img}
            text={props.jejuData.name}
            label='Adventure'
            path='/'
            />
      </ul>
  )
}

export default Card
