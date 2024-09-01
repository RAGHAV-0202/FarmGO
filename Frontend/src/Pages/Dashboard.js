import react , {useRef}from "react"
import "../css/dashboard.css"
import Sidebar from "../components/sidebar";

function Stage1(){
    return(
        <div className="dashboard_div">

        </div>
    )
}

function Stage2() {
    const N_C = useRef(null);
    const P_C = useRef(null);
    const K_C = useRef(null);
    const R_C = useRef(null);
    const H_C = useRef(null);
    const T_C = useRef(null);

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Safeguard to ensure refs are not null
        if (N_C.current && P_C.current && K_C.current && R_C.current && H_C.current && T_C.current) {
            const N = N_C.current.value;
            const P = P_C.current.value;
            const K = K_C.current.value;
            const R = R_C.current.value;
            const H = H_C.current.value;
            const T = T_C.current.value;

            // Basic validation example
            if (!N || !P || !K || !R || !H || !T) {
                alert("Please fill in all fields.");
                return;
            }

            const data = {
                N: N,
                P: P,
                K: K,
                rainfall: R,
                temperature: H,
                humidity: T
            };

            console.log(data);
            // You can further process or send this data as needed
        } else {
            alert("One or more inputs are not correctly referenced.");
        }
    }

    return (
        <div className="Suggestion_div">
            <h1>Crop Suggestion Tool</h1>
            <p>You can use this tool to predict the best suitable crop for your farm</p>

            <form onSubmit={handleSubmit} className="input_area">
                <div className="entry">
                    <p>Nitrogen Value</p>
                    <input type="number" ref={N_C} placeholder="Enter Nitrogen Value" required />
                </div>
                <div className="entry">
                    <p>Phosphorus Value</p>
                    <input type="number" ref={P_C} placeholder="Enter Phosphorus Value" required />
                </div>
                <div className="entry">
                    <p>Potassium Value</p>
                    <input type="number" ref={K_C} placeholder="Enter Potassium Value" required />
                </div>
                <div className="entry">
                    <p>Rainfall Value</p>
                    <input type="number" ref={R_C} placeholder="Enter Rainfall Value" required />
                </div>
                <div className="entry">
                    <p>Humidity Value</p>
                    <input type="number" ref={H_C} placeholder="Enter Humidity Value" required />
                </div>
                <div className="entry">
                    <p>Temperature Value</p>
                    <input type="number" ref={T_C} placeholder="Enter Temperature Value" required />
                </div>

                <div className="entry ent3">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
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

