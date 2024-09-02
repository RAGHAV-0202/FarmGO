import "../css/stage1.css"
import react , {useRef}from "react"

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
            />
            <CropInfoDivison
                name = "Area"
                value = "53 Acre"
            />
            <CropInfoDivison
                name = "Last production"
                value = "1200 kg"
            />
        </div>
    )
}
function CropInfoDivison({name , value}){
  return(
        <div className="CropInfoDivision shadow">
            <div className="division_left" ><i class="fa-light fa-farm" style={{color: "#63E6BE"}}></i></div>
            <div className="division_right">
                <p>{name}</p>
                <h6>{value}</h6>
            </div>
        </div>
  )  
}

function Statistics(){
    return(
        <div className="statistics">
            <div className="weatherDiv shadow">
                <div className="weatherDivDivison borderBottom">
                    <p>Air temperature</p>
                    <h6>28 C</h6>
                </div>
                <div className="weatherDivDivison borderBottom">
                    <p>Water content</p>
                    <h6>32%</h6>
                </div>
                <div className="weatherDivDivison">
                    <p>pH value</p>
                    <h6>8</h6>
                </div>
            </div>
            <div className="financials">s</div>
        </div>
    )
}

function Stage1(){
    return(
        <div className="dashboard_div">
            <FarmName/>
            <CropInfo/>
            <Statistics/>
            <div className="graph"></div>
        </div>
    )
}

export default Stage1