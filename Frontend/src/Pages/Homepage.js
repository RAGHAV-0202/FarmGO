import LoginPage from "./login_page";
import MainPage from "./Main_page";
import React from "react";
import "../css/homepage.css";

function HomePage(){

    const [step , setStep] = React.useState(0)

    return(
        <div className="homepage">
            {step === 0 && <LoginPage setStep={setStep} />}
            {step === 1 && <MainPage setStep={setStep}/>}
        </div>
    )
}

export default HomePage