import React, {useEffect, useState} from 'react'
import Navbar from '../component/nav/Navbar'
import {useDispatch, useSelector} from "react-redux";
import {setModalVisible} from "../store/RecommendCourseStep";
import Modal from "../component/modal/Modal";
import CourseModal from "../component/modal/CourseModal";
import Card from "../component/card/Card"
import hreoBg from "../assert/travel_bgr.png"
import './css/catedetail.css';
import { Link } from 'react-router-dom';

function CateDetail() {
    const dispatch = useDispatch();
    const Authorization = localStorage.getItem("Authorization");
    const modalVisible = useSelector((state) => state.RecommendCourseStep.modalVisible);
    const [button, setButton] = useState(true);
    const [jejuData, setJejuData] = useState([]);
    const [jejuData1, setJejuData1] = useState([]);
    let [pageNo,setPageNo] = useState(3);
    let [pageNo1, setPageNo1] = useState(3);

    const closeModal = () => {
        document.body.style.overflow = "auto";
        dispatch(setModalVisible(false));
    };
    const openModal = () => {
        if(Authorization === null)
        {
            alert("로그인 후 이용 가능 합니다.");
            window.location.href = "/login";
        }
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

    const pageNoplus = () => {
        setPageNo(pageNo+3);
    }

    const pageNoplus1 = () => {
        setPageNo1(pageNo1+3);
    }

    useEffect(()=>{
        fetch("http://localhost:8087/board/areaTravel",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(pageNo)
            })
            .then((res)=> res.json())
            .then((res) =>{
                console.log(res);
                setJejuData(res);
            })

        fetch("http://localhost:8087/board/issue",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(pageNo1)
            })
            .then((res)=> res.json())
            .then((res) =>{
                console.log(res);
                setJejuData1(res);
            })


    },[pageNo, pageNo1])



  return (
    <div>
        <Navbar/>
        <div className='cate-hero'>
            <div className='cate-hero-container'>
                <div className='column-left'>
                    <h1>원하는 코스를 추천 받아 보세요!</h1>
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
            <div className='cards'>
                            {jejuData.map((jejuData) => (
                                <Card key={jejuData.JejuDataNo} jejuData={jejuData} />
                            ))}
            </div>
            <br />
            <h1 onClick={pageNoplus}> 더보기 </h1>
        </div>

        <div className='cate-section'>
            <h1>요즘 뜨는 여행지는 어딜까?</h1>
            <div className='cards'>
                {jejuData1.map((jejuData1) => (
                    <Card key={jejuData1.JejuDataNo} jejuData={jejuData1} />
                ))}
            </div>
            <br />
            <h1 onClick={pageNoplus1}> 더보기 </h1>
        </div>

        <Modal visible={modalVisible} name="RecommendCourse" onClose={closeModal}>
            <CourseModal handleClose={closeModal} tabIndex={0}></CourseModal>
        </Modal>
    </div>
)
}

export default CateDetail;
