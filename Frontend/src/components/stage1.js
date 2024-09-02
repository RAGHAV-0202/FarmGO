import "../css/stage1.css"
import react , {useRef , useState , useEffect}from "react"
import CircularProgress from "./circularProgess"


function FarmName(){
    return(
        <div className="farmNameDiv">
            <h4>Greenvally Cardamom</h4>
            <button>+ Add crop</button>
        </div>
    )
}

function CropInfo(){
    return(
        <div className="cropInfoDiv">
            <CropInfoDivison
                name = "Crop Name"
                value = "Cardmom"
                icon = "wheat"
            />
            <CropInfoDivison
                name = "Area"
                value = "53 Acre"
                icon = "farm"
            />
            <CropInfoDivison
                name = "Last production"
                value = "1200 kg"
                icon = "bag-seedling"
            />
        </div>
    )
}
function CropInfoDivison({name , value , icon}){
  return(
        <div className="CropInfoDivision shadow">
            <div className="division_left" ><i class={`fa-light fa-${icon}`} style={{color: "green"}}></i></div>
            <div className="division_right">
                <p>{name}</p>
                <h6>{value}</h6>
            </div>
        </div>
  )  
}

function Statistics(){

    const APIKey = 'f4c9b1f6671b1e6290662baa534a8ad9';
    const city = 'Panipat';
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(res => res.json())
            .then(data => {
                setWeather(data);
                console.log(data); // Logging data for debugging
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }, []);

    console.log(weather.main)
    

    return(
        <div className="statistics">
            <div className="weatherDiv shadow">
                <div className="weatherDivDivison borderBottom ">
                    <p>Air temperature</p>
                    <h6>{(weather.main.temp).toFixed(0)} °C</h6>
                </div>
                <div className="weatherDivDivison borderBottom">
                    <p>Water content</p>
                    <h6>{weather.main.humidity}%</h6>
                </div>
                <div className="weatherDivDivison">
                    <p>pH value</p>
                    <h6>8</h6>
                </div>
            </div>
            <div className="financials shadow">
                <div className="financials_top">
                    <h6>Financial Statistics</h6>
                    <p>compare with last time</p>
                </div>
                <div className="financials_bottom">
                    <div className="financials_bottomLeft flex">
                         <CircularProgress percentage={78} />
                    </div>
                    <div className="financials_bottomRight flex">
                        <div className="financials_bottom_box financials_bottom_box_upper">
                            <p>Current profit</p>
                            <h6>64 <span>Lakh</span></h6>
                        </div>
                        <div className="financials_bottom_box financials_bottom_box_lower">
                            <p>Expected profit</p>
                            <h6>82 <span>Lakh</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Stage1(){
    return(
        <div className="dashboard_div">
            <FarmName/>
            <CropInfo/>
            <Statistics/>
            <div className="graph">

                {/* <h1>AREA FOR GRAPH</h1> */}
            </div>
        </div>
    )
}

export default Stage1