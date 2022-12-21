import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

function Carditem(props) {
    const place = props.text;
    const Authorization = localStorage.getItem("Authorization");
    const [likeplace, setLikeplace] = useState(false);


    const user_like_place = () =>{
        if(likeplace === true)
        {
            setLikeplace(false);
        }else
        {
            setLikeplace(true);
        }
        fetch("http://localhost:8087/user/likePlace",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
                body: place
            })
            .then((res)=> res.text())
            .then((res) =>{
            })
    }

    useEffect(()=>{
        if(Authorization !== null)
        {
            fetch("http://localhost:8087/user/likePlace",
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8', Authorization
                    },
                })
                .then((res)=> res.json())
                .then((res) =>{
                    for(let i in res) {
                        if(place === res[i].place)
                        {
                            setLikeplace(true);
                        }
                    }
                })
        }
    },[])

  return (
    <>
      <li className='card_item'>
          {Authorization !== null ? ( likeplace === false ? <p onClick={user_like_place}>♡</p> :<p onClick={user_like_place}>♥</p>) :<></> }
        <Link className='card_item_link' to={props.path}>
            <figure className='card_item_pic-wrap' data-category={props.label}>
                <img className='card_item_img' alt='Travel Img'
                src={props.src}/>
            </figure>
            <div className='card_item_info'>
                <h5 className='card_item_text'>{place}</h5>
            </div>
        </Link>
      </li>
    </>
  )
}

export default Carditem