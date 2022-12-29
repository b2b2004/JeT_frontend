import "./placereview.css"
import {useState, useEffect} from "react";
import { BiDotsVertical } from "react-icons/bi";

function PlaceReview(props){

    const {userId , username, content, nowDate, review_num, review_like_num} = props.review;
    const Authorization = localStorage.getItem("Authorization");
    const [likereview, setLikereview] = useState(false);

    useEffect(()=> {
        if (Authorization !== null) {
            // 좋아요 상태확인
            fetch("http://localhost:8087/board/JejuPlace/likereview",
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8', Authorization
                    },
                })
                .then(res => res.json())
                .then((res) => {
                    console.log(res);
                })
        }
    },[])

    // 좋아요 눌렀을때
    const user_like_place_review = () =>{
        if(likereview === true)
        {
            setLikereview(false);
        }else
        {
            setLikereview(true);
        }
        fetch("http://localhost:8087/board/JejuPlace/likereview",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
                body: review_num
            })
            .then((res)=> res.text())
            .then((res) =>{
                location.reload();
            })
    }

    return<>
        <li id="liid">
            <div>
                <div className="reviewId">
                    <p>{username}({userId})</p>
                    <div className="dropdown">
                        <input id="dropdown" type="checkbox" />
                        <label className="dropdownLabel" for="dropdown">
                            <BiDotsVertical size='20'/>
                        </label>
                        <div className="dropdown-content">
                            <ul className="dropdown-ul">
                                <li>수정</li>
                                <li>삭제</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="reviewContent">{content}</p>
                <p className="reviewDate">{nowDate}</p>
                <div className="btn2">
                    {Authorization !== null ? ( likereview === false ?
                            <p onClick={user_like_place_review}><div><img src="/images/good2.JPG" /><a>{review_like_num}</a></div></p> :
                            <p onClick={user_like_place_review}><div><img src="/images/good2.JPG" /><a>{review_like_num}</a></div></p>) :
                        <p><div><img src="/images/good2.JPG" /><a>{review_like_num}</a></div></p>}
                </div>
            </div>
        </li>
    </>
}

export default PlaceReview;