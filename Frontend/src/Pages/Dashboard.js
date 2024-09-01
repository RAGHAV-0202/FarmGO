import react from "react"
import "../css/dashboard.css"
import Sidebar from "../components/sidebar";

function Stage1(){
    return(
        <div className="dashboard_div">

        </div>
    )
}

function Stage2(){
    return(
        <div className="Suggestion_div">
            
        </div>
    )
}

function Stage3(){
    return(
        <div className="Disease_div">
            
        </div>
    )
}

function Stage4(){
    return(
        <div className="MarketPlace_div">
            
        </div>
    )
}

function RightSide({stage}){
    return(
        <div className="rightSide">
            <div className="mainDivInRight">
                { stage === 1 && <Stage1/>}
                { stage === 2 && <Stage2/>}
                { stage === 3 && <Stage3/>}
                { stage === 4 && <Stage4/>}
            </div>
        </div>
    )
}


function Dashboard(){
    const [stage , setStage] = react.useState(1)
    return(
        <div className="dashBoard">
            <Sidebar stage={stage} setStage={setStage}/>
            <RightSide stage={stage}/>
        </div>
    )
}

export default Dashboard;

