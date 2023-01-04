import {useDispatch, useSelector} from "react-redux";
import {nextStep, previousStep, set_keyword, set_placeId} from "../../store/RecommendCourseStep";
import {useEffect, useState} from "react";
import ModalCard from "../card/ModalCard";
import './ThirdModal.css'


const ThirdModal = ({handleClose}) =>{

    const dispatch = useDispatch();
    const [jejuData, setJejuData] = useState([]);
    const RecData = useSelector((state) => state.RecommendCourseStep);
    let [pageNo,setPageNo] = useState(6);
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
                setJejuData(res);
                console.log(res);
            })
    },[])
    function setValue(placeId){
        dispatch(set_placeId(placeId));
        console.log(RecData);
    }
    const sendData = () =>{
        fetch(
            'http://localhost:5000/tour_course', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(RecData),
            }
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                window.location.href = "/course/" +res.course_no;
            })
    }

    return  (
        <div className="app">
            <div className="thirdModal-left-arrow">
                <img
                    className="arrow-left-title"
                    src="/images/arrow-left.png"
                    onClick={backhandleStep}
                />
            </div>
            <div className="thirdModal-Wrap">
                <ul>
                {jejuData.map((jejuData) => (
                    <div onClick={()=>{setValue(jejuData.jejuDataNo)}}>
                    <ModalCard key={jejuData.JejuDataNo} jejuData={jejuData} />
                    </div>
                ))}
                </ul>
            </div>

            <div className="complete-btn" onClick={sendData}>
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