import React from 'react'
import IMG from '../../assert/forest_sa.jpg'

const ModalCarditem = (props) => {
  return (
    <>
        <li>
            <div className='modalCard'>
                <div className='checkbox'>
                    <input type='checkbox'></input>
                </div>
                <div className='img-container'>
                    <div className='img-inner'>
                        <div className='inner-skew'>
                            <img src={IMG}></img>
                        </div>
                    </div>
                </div>
                <div className='text-container'>
                    <h3>사려니 숲길</h3>
                </div>
            </div>
        </li>
    </>
  )
}

export default ModalCarditem
