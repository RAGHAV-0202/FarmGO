import react , {useRef}from "react"
import "../css/dashboard.css"
import Sidebar from "../components/sidebar";
import "../css/detect_disease.css"
import axios from "axios"
import Stage1 from "../components/stage1";
import Stage2 from "../components/stage2";
import Stage3 from "../components/detect_disease";
import { NewHomePage } from "./homepage";




function Stage4(){
    return(
        <div className="MarketPlace_div">
            <img height="200px" src="https://thumbs.dreamstime.com/b/work-progress-warning-sign-stencil-yellow-black-stripes-painted-over-concrete-wall-cement-texture-background-concept-123015550.jpg"></img>
        </div>
    )
}

function Stage0({header}){
    return(
        <>
            <NewHomePage
                header={header}
            />
        </>
    )
}

function RightSide({stage}){
    return(
        <div className="rightSide">
            <div className="mainDivInRight">
                { stage === 0 && <Stage0
                    header = {false}
                />}
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

