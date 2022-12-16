import React from 'react'
import Carditem from './Carditem'
import "./card.css"

import travel1 from '../../assert/forest_sa.jpg'



function Card() {
  return (
    <div className='cards'>
      <div className='card_container'>
        <div className='card_wrapper'>
          <ul className='card_items'>
            <Carditem
            src={travel1}
            text="Expore the hidden waterfall"
            label='Adventure'
            path='/'
            />
            <Carditem
            src={travel1}
            text="Expore the hidden waterfall"
            label='Adventure'
            path='/'
            />
            <Carditem
            src={travel1}
            text="Expore the hidden waterfall"
            label='Adventure'
            path='/'
            />
          </ul>
          <ul className='card_items'>
            <Carditem
            src={travel1}
            text="Expore the hidden waterfall"
            label='Adventure'
            path='/'
            />
            <Carditem
            src={travel1}
            text="Expore the hidden waterfall"
            label='Adventure'
            path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
