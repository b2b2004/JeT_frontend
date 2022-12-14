import Calendar from "react-calendar";
import {useDispatch} from "react-redux";
import {nextStep, previousStep} from "../../store/RecommendCourseStep";

const ThirdModal = ({handleClose}) =>{

    const dispatch = useDispatch();
    const nexthandleStep = async () => {
        dispatch(nextStep());
    };
    const backhandleStep = async () => {
        dispatch(previousStep());
    };

    return  (
        <>
            + 지도인기 관광지
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