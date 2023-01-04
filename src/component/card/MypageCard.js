import Carditem from "./Carditem";
import "./mypagecard.css"

function MypageCard(props){
    let img = props.jejuData.detail_img.split(',')[0];
    img = img.substring(2,img.length-1);
    return (
        <ul className='card_items'>
            <Carditem
                src={img}
                text={props.jejuData.name}
                path={props.jejuData.jejuDataNo}
            />
        </ul>
    )
}

export default MypageCard;