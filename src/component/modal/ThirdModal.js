import Calendar from "react-calendar";
import {useDispatch} from "react-redux";
import {nextStep, previousStep} from "../../store/RecommendCourseStep";
import {useEffect, useState} from "react";
import ModalCard from "../card/ModalCard";

import './ThirdModal.css'

const ThirdModal = ({handleClose}) =>{

    const dispatch = useDispatch();
    const [jejuData, setJejuData] = useState([]);
    let [pageNo,setPageNo] = useState(6);
    const nexthandleStep = async () => {
        dispatch(nextStep());
    };
    const backhandleStep = async () => {
        dispatch(previousStep());
    };

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
    },[])

    return  (
        <div className="app">
            <div className="thirdModal-left-arrow">
                <img
                    className="arrow-left-title"
                    src="/images/arrow-left.png"
                    onClick={backhandleStep}
                />
            </div>
            <div>
                <ModalCard/>
            </div>
            <div className="modal-likePlace-btn">
                <button>찜 목록</button>
            </div>

            <div className="complete-btn">
                <button>완료</button>
            </div>
            <div className="thirdModal-right-arrow">
                    <img
                        className="arrow-right-title"
                        src="/images/arrow-right.png"
                    />
            </div>
        </div>
    );
}

export default ThirdModal;