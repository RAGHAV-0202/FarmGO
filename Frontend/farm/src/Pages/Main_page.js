import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom"
import { gapi } from "gapi-script";




const clientId = "413271787614-j8ch2do23jvq9paten0djndccaafqc2m.apps.googleusercontent.com"

export function GoogleLogoutButton(){
    const navigate = useNavigate();
    const onSuccess = async(res)=>{
        navigate('/homepage');
    }
    return(
        <div className="GoogleSignInbutton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />      
        </div>
    )
}

function MainPage(){
    React.useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId : clientId,
                scope : ""
            })
        }
        gapi.load("client:auth2" , start)
    } , [])

    return(
        <GoogleLogoutButton/>
    )
}

export default MainPage