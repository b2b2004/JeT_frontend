import "./placereview.css"
import {useState, useEffect} from "react";
import { BiDotsVertical } from "react-icons/bi";
import Swal from "sweetalert2";

function PlaceReview(props){

    const {userId , username, content, nowDate, review_num, review_like_num} = props.review;
    const Authorization = localStorage.getItem("Authorization");
    const [user,setUser] = useState({});
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

            fetch(
                'http://localhost:8087/user/loginuser', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8', Authorization
                    },
                }
            )
                .then((res) => res.json())
                .then((res) => {
                    setUser(res);
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

    const DeleteReview = () =>{
        Swal.fire({
            icon: 'warning',
            title: '댓글을 삭제하시겠습니까?',
            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
            confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
            cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
            confirmButtonText: '확인', // confirm 버튼 텍스트 지정
            cancelButtonText: '취소', // cancel 버튼 텍스트 지정
        }).then(result => {
            if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
                fetch("http://localhost:8087/board/deleteReview",
                    {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                        },
                        body: review_num
                    })
                    .then((res)=> res.text())
                    .then((res) =>{
                        if(res == 1){
                            Swal.fire({icon: 'success', title: '댓글 삭제 성공'}).then(()=>{ window.location.reload();});
                        }else{
                            Swal.fire({icon: 'error', title: '댓글 삭제 실패'}).then(()=>{ window.location.reload();});
                        }
                    })
            }
        });

    }

    return<>
        <li id="liid">
            <div>
                <div className="reviewId">
                    <p>{username}({userId})</p>

                    {user.userId === userId ?
                        <div className="dropdown">
                            <input id="dropdown" type="checkbox"/>
                            <label className="dropdownLabel" htmlFor="dropdown">
                                <BiDotsVertical size='20'/>
                            </label>
                            <div className="dropdown-content">
                                <ul className="dropdown-ul">
                                    <li onClick={DeleteReview}>삭제</li>
                                </ul>
                            </div>
                        </div>
                        :<></>}
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