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
        {id:1, value: "가", label: "가"},
        {id:2, value: "나", label: "나"},
        {id:3, value: "다", label: "다"},
        {id:4, value: "라", label: "라"},
        {id:5, value: "마", label: "마"},
        {id:6, value: "바", label: "바"},
        {id:7, value: "사", label: "사"},
        {id:8, value: "아", label: "아"},
        {id:9, value: "자", label: "자"},
        {id:10, value: "차", label: "차"},
        {id:11, value: "카", label: "카"},
        {id:12, value: "타", label: "타"},
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
            <div className="secondModal- container">
                <Select
                    isMulti
                    name="area"
                    onChange={changeSelect}
                    className="languages"
                    options={options}
                    placeholder="기술을 선택해주세요."
                    
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