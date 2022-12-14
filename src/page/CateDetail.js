import React, {useEffect, useState} from 'react'
import Navbar from '../component/nav/Navbar'
import {useDispatch, useSelector} from "react-redux";
import {setModalVisible} from "../store/RecommendCourseStep";
import Modal from "../component/modal/Modal";
import CourseModal from "../component/modal/CourseModal";

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
        여기는 카테고리별 디테일 페이지

        <button onClick={openModal}>
            코스 추천 받기
        </button>
        <Modal visible={modalVisible} name="RecommendCourse" onClose={closeModal}>
            <CourseModal handleClose={closeModal} tabIndex={0}></CourseModal>
        </Modal>
    </div>
)
}

export default CateDetail;
