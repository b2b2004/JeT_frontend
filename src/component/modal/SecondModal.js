import Calendar from "react-calendar";
import moment from "moment";
import {nextStep, previousStep, set_duration_end, set_duration_start} from "../../store/RecommendCourseStep";
import {useDispatch} from "react-redux";

const SecondModal = ({handleClose}) =>{
    const dispatch = useDispatch();

    const nexthandleStep = async () => {
        dispatch(nextStep());
    };
    const backhandleStep = async () => {
        dispatch(previousStep());
    };

    return  (
        <>
            + 키워드 / 사용자 성향
            <footer className="modal_footer">
                <img
                    className="arrow-left-title"
                    src="/images/arrow-left.png"
                    onClick={backhandleStep}
                />

                <img
                    className="arrow-right-title"
                    src="/images/arrow-right.png"
                    onClick={nexthandleStep}
                />
            </footer>
        </>
    );
}

export default SecondModal;