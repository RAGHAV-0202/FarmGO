import "../css/stage1.css"
import react , {useRef}from "react"

function Stage1(){
    return(
        <div className="dashboard_div">
            <div className="farmNameDiv">
                <h4>Greenvally Cardamom</h4>
                <button>+ Add crop</button>
            </div>
            <div className="cropInfoDiv">
                <div className="CropInfoDivision">
                    <div className="division_left" ><i class="fa-light fa-wheat-awn" style={{color: "#63E6BE"}}></i></div>
                    <div className="division_right">
                        <p>Crop name</p>
                        <h6>Cardamom</h6>
                    </div>
                </div>
               <div className="CropInfoDivision">
                    <div className="division_left" ><i class="fa-light fa-farm" style={{color: "#63E6BE"}}></i></div>
                    <div className="division_right">
                        <p>Crop name</p>
                        <h6>Cardamom</h6>
                    </div>
                </div>
               <div className="CropInfoDivision">
                    <div className="division_left" ><i class="fa-light fa-solid fa-bag-seedling" style={{color: "#63E6BE"}}></i></div>
                    <div className="division_right">
                        <p>Crop name</p>
                        <h6>Cardamom</h6>
                    </div>
                </div>
            </div>
            <div className="statistics">
                <div className="weatherDiv">s</div>
                <div className="financials">s</div>
            </div>
            <div className="graph"></div>
        </div>
    )
}

export default Stage1