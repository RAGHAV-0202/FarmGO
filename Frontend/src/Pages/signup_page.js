import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import "../css/admin.css"
import { useNavigate } from "react-router-dom"
const clientId = "413271787614-j8ch2do23jvq9paten0djndccaafqc2m.apps.googleusercontent.com"


function SignupPageComponent(){
    const navigate = useNavigate();
    const [message_for_frontend , setMsg] = React.useState("")

    const emailContainer = React.useRef(null)
    const passContainer = React.useRef(null)
    const nameContainer = React.useRef(null)
    

    const handleSubmit = async(e) =>{
        e.preventDefault() ;
        const email = (emailContainer.current.value)
        const password = (passContainer.current.value)
        const fullName = nameContainer.current.value

       try {
        alert("please wait, process may take 4-5 seconds")
            const response = await axios.post("http://localhost:8000/api/auth/register", { email, password , fullName}, { withCredentials: true })
            console.log(response.data.message)


            console.log("Signed up")

            emailContainer.current.value = ""
            passContainer.current.value = ""
            nameContainer.current.value = ""
            // setStep(1)
            navigate('/app');

       } catch (error) {
            console.log(`error : ${error}`)
            setMsg( "Unable to Register , Minimum Password length is 6")
            alert(error)
            console.log(error.stack)
       }
    }

    return(
        <div className="login_page">
                <div className="left">
                    <div className="left_header heading">
                       <p>Fasal<span>Guru</span></p>
                    </div>
                    <div className="left_content">
                        <div className="left_container">
                            <div className="bold heading">Sign up</div>
                            <div className="login_form">
                                <span><p>Full Name</p></span>
                                <input ref={nameContainer} className="email" type="email" placeholder="Enter Full Name" />
                                <span><p>E-Mail address</p></span>
                                <input ref={emailContainer} className="email" type="email" placeholder="Enter Email Address" />
                                <span><p>Password</p></span>
                                <input  ref={passContainer} className="password" type="password" placeholder="Enter Password" />
                                <p className="login_info">
                                    <p>{message_for_frontend}</p>
                                </p>
                                <button onClick={handleSubmit} className="sign_up_btn" >Sign up</button>
                                <span className="center" ><p className="black"></p>Already registered ?<Link class="login_link" to="/app"> Login</Link></span>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right_header">
                        <div className="button_div">
                            {/* <label className="switch">
                                <input type="checkbox"></input>
                                <span className="slider round"></span>
                            </label> */}
                        </div>
                        {/* <a href="#" className="btn-other btn">About</a> */}
                        <Link to="/app" className="btn-login btn">Login</Link>
                    </div>
                    <div className="right_content">
                        <div className="right_container"></div>
                    </div>
                </div>
        </div>
    )
}

function SignupPage(){

    return(
        <div className="admin_page">
            <SignupPageComponent/>

        </div>
    )
}

export default SignupPage