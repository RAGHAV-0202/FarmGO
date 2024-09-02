import react , {useRef}from "react"
import "../css/dashboard.css"
import Sidebar from "../components/sidebar";
import "../css/detect_disease.css"
import axios from "axios"
import Stage1 from "../components/stage1";
import Stage2 from "../components/stage2";
import Stage3 from "../components/detect_disease";




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

