import react , {useRef}from "react"
import "../css/dashboard.css"
import axios from "axios"


function Stage2() {
    const N_C = useRef(null);
    const P_C = useRef(null);
    const K_C = useRef(null);
    const R_C = useRef(null);
    const H_C = useRef(null);
    const T_C = useRef(null);
    const [output , setOutput] = react.useState(false)
    let [suggestion , setSuggestion ] = react.useState("")
    async function handleSubmit(event) {
        event.preventDefault(); 

        if (N_C.current && P_C.current && K_C.current && R_C.current && H_C.current && T_C.current) {
            const N = N_C.current.value;
            const P = P_C.current.value;
            const K = K_C.current.value;
            const R = R_C.current.value;
            const H = H_C.current.value;
            const T = T_C.current.value;

            if ( !R || !H || !T) {
                alert("Please fill in all fields.");
                return;
            }

            const data = {
                N: N || 53,
                P: P || 53,
                K: K || 53,
                rainfall: R,
                temperature: H,
                humidity: T
            };

            console.log(data);
            let response ; 
            try{
            response = await axios.post("https://terrible-fish-38.telebit.io/predict" , data,{
                headers: {
                    'Content-Type': 'application/json'
                    }
                });

                console.log(response?.data?.prediction)

            
            setSuggestion(response?.data?.prediction)
            setOutput(true) 

            }catch(error){
                console.log("error while loading data ; error : " + error)
            }



        } else {
            alert("One or more inputs are not correctly referenced.");
        }
    }

    console.log(suggestion)

    return (
        <div className="Suggestion_div">
            <h1>Crop Suggestion Tool</h1>
            <p>You can use this tool to predict the best suitable crop for your farm</p>

            <form onSubmit={handleSubmit} className="input_area">
                <div className="inputs">
                    <div className="entry">
                        <p>Nitrogen Value</p>
                        <input type="number" ref={N_C} placeholder="Enter Nitrogen Value"  max={300} />
                    </div>
                    <div className="entry">
                        <p>Phosphorus Value</p>
                        <input type="number" ref={P_C} placeholder="Enter Phosphorus Value"  max={300} />
                    </div>
                    <div className="entry">
                        <p>Potassium Value</p>
                        <input type="number" ref={K_C} placeholder="Enter Potassium Value"  max={300} />
                    </div>
                    <div className="entry">
                        <p>Rainfall Value</p>
                        <input type="number" ref={R_C} placeholder="Enter Rainfall Value" required  max={400} />
                    </div>
                    <div className="entry">
                        <p>Humidity Value</p>
                        <input type="number" ref={H_C} placeholder="Enter Humidity Value" required max={100} />
                    </div>
                    <div className="entry">
                        <p>Temperature Value</p>
                        <input type="number" ref={T_C} placeholder="Enter Temperature Value" required max={60} />
                    </div>
                </div>

                <div className="entry ent3">
                    <button type="submit">Submit</button>
                </div>
            </form>
{output &&  <div className="suggestion_output">
                <p>According to our research model , you should grow <h4>{suggestion}</h4> on your farm</p>
            </div>}
        </div>
    );
}
export default Stage2
