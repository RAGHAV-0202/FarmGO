

import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from "./Pages/Homepage";
import SignupPage from "./Pages/signup_page"
import Dashboard from "./Pages/Dashboard";

const ReactRouterSetup = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>
    )
}

export default ReactRouterSetup