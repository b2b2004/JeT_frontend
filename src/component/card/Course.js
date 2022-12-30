import React from 'react'
import CourseCardItem from './Courseitem'
import './course.css'
import {setModalVisible} from "../../store/RecommendCourseStep";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../modal/Modal";
import CourseModal from "../modal/CourseModal";
import HouseAndFoodModal from "../modal/HouseAndFoodModal";

const Course = (props) => {


    const modalVisible = useSelector((state) => state.RecommendCourseStep.modalVisible);
    const dispatch = useDispatch();
    const closeModal = () => {
        document.body.style.overflow = "auto";
        dispatch(setModalVisible(false));
    };
    const openModal = () => {
        document.body.style.overflow = "hidden";
        dispatch(setModalVisible(true));
    };
  return (
    <ul>
        <div onClick={openModal}>
            <CourseCardItem />
        </div>
        <Modal visible={modalVisible} name="RecommendCourse" onClose={closeModal}>
            <HouseAndFoodModal handleClose={closeModal} tabIndex={0}></HouseAndFoodModal>
        </Modal>
    </ul>

  )
}

export default Course
