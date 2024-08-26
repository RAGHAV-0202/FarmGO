

import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import LoginPage from "./Pages/login_page";
import SignupPage from "./Pages/signup_page";
import MainPage from "./Pages/Main_page";


const ReactRouterSetup = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/homepage" element={<MainPage/>} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
            </Routes>
        </Router>
    )
}

export default ReactRouterSetup