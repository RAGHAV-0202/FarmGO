

import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import LoginMainPage from "./Pages/Login&MainPage";
import SignupPage from "./Pages/signup_page"
import Dashboard from "./Pages/Dashboard";
import HomePage from "./Pages/homepage";

const ReactRouterSetup = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/app" element={<LoginMainPage/>} />
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>
    )
}

export default ReactRouterSetup