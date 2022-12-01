import React, {useEffect} from 'react'
import { Link } from "react-router-dom";

import Navbar from '../component/nav/Navbar'
import Card from '../component/card/card'
import Bg from '../assert/jeju-island.mp4'

import '../page/css/home.css'

function Home() {

  return (
    <div className='container'>
        <Navbar/>
        <div className='hero-main'>
          <div className='hero-title'>
            <span>Welcome</span>
            <h1>Let's travel to Jeju</h1>
            <p>제주 여행 코스 도우미</p>
          </div>
          <div className='hero-btn'>
            <Link to='/category'>
              <button id='cat-btn'>CATEGORY</button>
            </Link>
            <Link to='/map'>
              <button id='map-btn'>MAP</button>
            </Link>
          </div>
        </div>

        <div className='c-container'>
          <div className='section-bg'></div>
            <div className='h-video'>
              <video src={Bg} loop muted autoPlay></video>
            </div>
            <div className='c-content'>
              <div className='c-title'>
                <h1>여기는 어떠신가요?</h1>
              </div>
              <div className='c-card'>
                <Card/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home
