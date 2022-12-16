import React, {useEffect, useState} from 'react'
import Navbar from '../component/nav/Navbar'
import {useDispatch, useSelector} from "react-redux";
import {setModalVisible} from "../store/RecommendCourseStep";
import Modal from "../component/modal/Modal";
import CourseModal from "../component/modal/CourseModal";

import Card from "../component/card/Card"
import hreoBg from "../assert/travel_bgr.png"
import './css/catedetail.css';

function CateDetail() {
    const dispatch = useDispatch();
    const modalVisible = useSelector((state) => state.RecommendCourseStep.modalVisible);
    const [button, setButton] = useState(true);

    const closeModal = () => {
        document.body.style.overflow = "auto";
        dispatch(setModalVisible(false));
    };
    const openModal = () => {
        document.body.style.overflow = "hidden";
        dispatch(setModalVisible(true));
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=>{

        fetch("http://localhost:8087/board/areaTravel",
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
            .then((res)=> res.json())
            .then((res) =>{
                console.log(res);
            })

    },[])

  return (
    <div>
        <Navbar/>
        <h1>Category Detail Page</h1>
        <div className='cate-hero'>
            <div className='cate-hero-container'>
                <div className='column-left'>
                    <h1>원하는 코스를 추천 받아 보세요!</h1>
                    <p>알랄라라라라라랄라ㅏ</p>
                    <button className='rec-btn' onClick={openModal}>
                        코스 추천 받기
                    </button>
                </div>
                <div className='column-right'>
                    <img src={hreoBg} alt='bg'
                    className='cate-hero-img'></img>
                </div>
            </div>
        </div>
        <div className='cate-section'>
            <h1>제주도에는 이런 여행지가 있습니다</h1>
            <p>지도 모형 넣기</p>
            <Card/>
        </div>

        <Modal visible={modalVisible} name="RecommendCourse" onClose={closeModal}>
            <CourseModal handleClose={closeModal} tabIndex={0}></CourseModal>
        </Modal>
    </div>
)
}

export default CateDetail;
