import Carditem from "./Carditem";
import "./mypagecard.css"
import Carditem1 from "./Carditem1";

function MypageCard(props){
    let img = props.userlikeplace.detail_img.split(',')[0];
    img = img.substring(2,img.length-1);
    return (
        <ul className='card_items1'>
            <Carditem1
                src={img}
                text={props.userlikeplace.name}
                path={props.userlikeplace.user_like_num}
            />
        </ul>
    )
}

export default MypageCard;