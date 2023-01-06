import {useEffect} from "react";
import {useParams} from "react-router-dom";

function Oauth2Login(){
    const params = useParams();
    console.log(params);
    useEffect(() => {
        localStorage.clear();
        localStorage.setItem("Authorization", params.token);
        fetch("http://localhost:8087/user/getSurvey",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: params.userId
            })
            .then((res)=> res.text())
            .then((res) =>{
                console.log(res);
                if(res !== "") {
                    window.location.href = "/";
                }else{
                    window.location.href = "/survey/" + params.userId;
                }
            })
    }, []);
    return<></>;
}
export default Oauth2Login;