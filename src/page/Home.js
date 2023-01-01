import React, {useEffect} from 'react'
import { Link } from "react-router-dom";

import Navbar from '../component/nav/Navbar'
import Bg from '../assert/jeju-island.mp4'

import '../page/css/home.css'

function Home() {

  return (
  <div class="container">
        <section class="hero">
          <Navbar/>
            <div class="head">
                <div className='hero-title'>
                  <span>Welcome</span>
                  <h1>Let's travel to Jeju</h1>
                  <p>제주 여행 코스 도우미</p>
                </div>
              <div className='hero-btn'>
                <Link to='/category'>
                  <button id='cate-btn'>CATEGORY</button>
                </Link>
                <Link to='/courseDetail'>
                  <button id='map-btn'>Course</button>
                </Link>
                <Link to='/map'>
                  <button id='map-btn'>MAP</button>
                </Link>
              </div>
            </div>
            <video src={Bg} autoPlay muted loop></video>
        </section>
    </div>
  )
}

export default Home
