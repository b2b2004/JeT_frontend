import "./mapcard.css";

function MapCard(props){
    let img = props.jejuData.detail_img.split(',')[0];
    img = img.substring(2,img.length-1);

    return<>
        <li className="mapcard_wrap">
            <div className="img_wrap">
                <img src={img} />
            </div>
            <div className="content_wrap">
                <p className="title">{props.jejuData.name}</p>
                <p className="area">{props.jejuData.address}</p>
                <br/><br/>
                <p><img src="/images/good2.JPG" alt="" />{props.jejuData.real_like_num}</p>
            </div>
        </li>
    </>
}

export default MapCard;