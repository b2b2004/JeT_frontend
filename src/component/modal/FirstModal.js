import {useDispatch} from "react-redux";
import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import {nextStep, previousStep, set_duration_end, set_duration_start} from "../../store/RecommendCourseStep";

const FirstModal = ({handleClose}) =>{

    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());

    const nexthandleStep = async () => {
        const duration_start = moment(date[0]).format("YYYY,MM,DD");
        const duration_end = moment(date[1]).format("YYYY,MM,DD");
        dispatch(set_duration_start(duration_start));
        dispatch(set_duration_end(duration_end));
        dispatch(nextStep());
    };
    const backhandleStep = async () => {
        const duration_start = moment(date[0]).format("YYYY,MM,DD");
        const duration_end = moment(date[1]).format("YYYY,MM,DD");
        dispatch(set_duration_start(duration_start));
        dispatch(set_duration_end(duration_end));
        dispatch(previousStep());
    };

    return  (
        <>

            <div className="app">
                {/*{moment(date[0]).format("YYYY년 MM월 DD일")}   ~   {moment(date[1]).format("YYYY년 MM월 DD일")}*/}
                {/*<br/>*/}
                <div className="calendar-container">
                    <Calendar onChange={setDate} value={date} selectRange={true} />
                </div>
            </div>
            + 지도
            <footer className="modal_footer">

                <img
                    className="arrow-right-title"
                    src="/images/arrow-right.png"
                    onClick={nexthandleStep}
                    alt="arrow"
                />
            </footer>
        </>
    );
}

export default FirstModal;