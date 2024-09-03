import "../css/stage1.css"
import react , {useRef , useState , useEffect}from "react"
import CircularProgress from "./circularProgess"
import WeatherChart from "./weatherChart"

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
function Graph({position}){
    const latitude = position?.latitude || 29.3666816;
    const longitude =  position?.longitude || 76.9785856;
    const weatherBitAPI = "bc1f514b2c0c454588b5d109e74eb6a9"; // Replace with your actual API key

    let [weatherData, setData] = useState(null);

    useEffect(() => {
        // Calculate the dates
        const currentTime = new Date();
        const endDate = currentTime.toISOString().split('T')[0]; // Format: YYYY-MM-DD
        const pastDate = new Date(currentTime.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago
        const startDate = pastDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD

        // Fetch data from Weatherbit API
        const url = `https://api.weatherbit.io/v2.0/history/hourly?lat=${latitude}&lon=${longitude}&start_date=${startDate}&end_date=${endDate}&key=${weatherBitAPI}`;
        
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                // console.log(data);
            })
            .catch(error => {
                // setError(error.message);
                console.error('Error fetching data:', error);
            });
    }, [latitude, longitude, weatherBitAPI]); // Add dependencies to the array

    // console.log(weatherData?.data)

    return(
        <div className="graph"> 
            <WeatherChart
                data = {weatherData}
            />
            {/* <h1>AREA FOR GRAPH</h1> */}
        </div>
    )
}

function Statistics({position}){

    const APIKey = 'f4c9b1f6671b1e6290662baa534a8ad9';
    const latitude = position?.latitude || 29.3666816;
    const longitude =  position?.longitude || 76.9785856; 
    const [weather, setWeather] = useState(null);

    

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKey}`)
            .then(res => res.json())
            .then(data => {
                setWeather(data);
                // console.log(data); // Logging data for debugging
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }, []);

    return(
        <div className="statistics">
{     weather &&       <div className="weatherDiv shadow">
                <div className="weatherDivDivison borderBottom ">
                    <p>Air temperature</p>
                    <h6>{(weather?.main?.temp).toFixed(0)} °C</h6>
                </div>
                <div className="weatherDivDivison borderBottom">
                    <p>Water content</p>
                    <h6>{weather?.main?.humidity}%</h6>
                </div>
                <div className="weatherDivDivison">
                    <p>pH value</p>
                    <h6>8</h6>
                </div>
            </div>}
{!weather && <div className="weatherDiv shadow">
                <div className="weatherDivDivison borderBottom ">
                    <p>Air temperature</p>
                    <h6>25 °C</h6>
                </div>
                <div className="weatherDivDivison borderBottom">
                    <p>Water content</p>
                    <h6>62%</h6>
                </div>
                <div className="weatherDivDivison">
                    <p>pH value</p>
                    <h6>8</h6>
                </div>
            </div>}
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
    

    const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);
//   console.log(position)

    return(
        <div className="dashboard_div">
            <FarmName/>
            <CropInfo/>
            <Statistics position={position}/>
            <Graph position={position} />
        </div>
    )
}

export default Stage1