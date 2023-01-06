import styles from "./HouseAndFoodModal.module.css";
import FoodModal from "./FoodModal";
import HouseModal from "./HouseModal"
import {useSelector} from "react-redux";

const FIRST = 1;
const SECOND = 2;

const HouseAndFoodMadal = ({handleClose},props) =>{
    const CourseModalStep = useSelector((state) => state.FoodStoreStep.currentStep);
    const renderByRecommendCourseStep = (CourseModalStep) => {
        switch (CourseModalStep) {
            case FIRST:
                return <FoodModal />;
            case SECOND:
                return <HouseModal handleClose={handleClose}></HouseModal>;
        }
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.modalHeader}>
                <div className={styles.exitWrapper} onClick={handleClose}>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        tabIndex="1"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                </div>
            </div>
            <div className={styles.modalContent}>{renderByRecommendCourseStep(CourseModalStep)}</div>
        </div>
    );

}
export default HouseAndFoodMadal;