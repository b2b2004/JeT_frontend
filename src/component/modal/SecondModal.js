import {
    nextStep,
    previousStep,
    set_keyword
} from "../../store/RecommendCourseStep";
import {useDispatch} from "react-redux";
import Select from "react-select";
import "./SecondModal.css";
import {useState} from "react";

const SecondModal = ({handleClose}) =>{
    const dispatch = useDispatch();
    const [val,setVal] = useState([]);
    const [keyword,setKeyword] = useState([]);
    let a = [];
    const [vallength,setVallength] = useState();

    const options = [
        {id:1, value: "0", label: "커플,우정"},
        {id:2, value: "1", label: "자연"},
        {id:3, value: "2", label: "체험"},
        {id:4, value: "3", label: "역사"},
        {id:5, value: "4", label: "가족"}
    ];

    const changeSelect = (e) => {
        setVallength(e.length);
        setVal({...e});
    }

    const nexthandleStep = async () => {
        for(let i=0;i<vallength;i++)
        {
            keyword.push(val[i].value);
        }
        console.log(keyword);
        dispatch(set_keyword(keyword));
        dispatch(nextStep());
    };
    const backhandleStep = async () => {
        dispatch(previousStep());
    };

    return  (
        <>
            <h1>키워드를 선택해주세요</h1>
            <div className="app">
            <div className="secondModal-left-arrow">
                <img
                    className="arrow-left-title"
                    src="/images/arrow-left.png"
                    onClick={backhandleStep}
                />
            </div>
            <div className="secondModal-container">
                <Select
                    isMulti
                    name="area"
                    onChange={changeSelect}
                    className="languages"
                    options={options}
                    placeholder="키워드를 선택해주세요."
                    
                />
            </div>

            <div className="secondModal-right-arrow">
                <img
                    className="arrow-right-title"
                    src="/images/arrow-right.png"
                    onClick={nexthandleStep}
                />
            </div>
            </div>
        </>
    );
}

export default SecondModal;