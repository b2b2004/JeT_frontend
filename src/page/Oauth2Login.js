import {useEffect} from "react";
import {useParams} from "react-router-dom";

function Oauth2Login(){
    const params = useParams();
    useEffect(() => {
        localStorage.clear();
        localStorage.setItem("Authorization", params.token);
        window.location.href = "/";
    }, []);
    return<></>;
}
export default Oauth2Login;