import Calendar from "react-calendar";
import {useDispatch} from "react-redux";
import {nextStep, previousStep} from "../../store/RecommendCourseStep";
import {useEffect, useState} from "react";
import Card from "../card/Card";

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
        <>
            <div className='cards'>
                {jejuData.map((jejuData) => (
                    <Card key={jejuData.JejuDataNo} jejuData={jejuData} />
                ))}
            </div>

            <footer className="modal_footer">
                <img
                    className="arrow-left-title"
                    src="/images/arrow-left.png"
                    onClick={backhandleStep}
                />
            </footer>
        </>
    );
}

export default ThirdModal;