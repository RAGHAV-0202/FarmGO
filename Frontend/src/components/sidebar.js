import "../css/sidebar.css"
import react from "react";



function Sidebar({ stage, setStage }) {

    const styles = 'rgb(241, 231, 213)' ;
    const textstyles = 'black'
    const iconColor = '#33845e'
    const iconDefaultColor = "#FFD43B"
    

    return (
        <div className="sidebar">
            <div className="logo">
                <h1>AgroBoard</h1>
                <div className="profile">
                    <div className="image_div">
                        <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                            alt="profile_image" />
                    </div>
                    <h6>Hello World</h6>
                    <p>Farm Owner</p>
                </div>
            </div>

            <div className="options">
                <button
                    onClick={() => setStage(0)}
                    style={{ backgroundColor: stage === 0 ? styles : 'transparent' }}>
                    <i className="fa-solid fa-house" style={{ color: stage === 0 ? iconColor : iconDefaultColor }}></i>
                    <p style={{ color: stage === 0 ? textstyles : 'white' }}>Home</p>
                </button>
                <button
                    onClick={() => setStage(1)}
                    style={{ backgroundColor: stage === 1 ? styles : 'transparent' }}>
                    <i className="fa-sharp fa-solid fa-table-columns" style={{ color: stage === 1 ? iconColor : iconDefaultColor }}></i>
                    <p style={{ color: stage === 1 ? textstyles : 'white' }}>Dashboard</p>
                </button>
                <button
                    onClick={() => setStage(2)}
                    style={{ backgroundColor: stage === 2 ? styles : 'transparent' }}>
                    <i className="fa-solid fa-seedling" style={{ color: stage === 2 ? iconColor : iconDefaultColor }}></i>
                    <p style={{ color: stage === 2 ? textstyles : 'white' }}>Suggest Crop</p>
                </button>
                <button
                    onClick={() => setStage(3)}
                    style={{ backgroundColor: stage === 3 ? styles : 'transparent' }}>
                    <i className="fa-sharp fa-solid fa-disease" style={{ color: stage === 3 ? iconColor : iconDefaultColor }}></i>
                    <p style={{ color: stage === 3 ? textstyles : 'white' }}>Disease Detection</p>
                </button>
                <button
                    onClick={() => setStage(4)}
                    style={{ backgroundColor: stage === 4 ? styles : 'transparent' }}>
                    <i className="fa-sharp fa-solid fa-shop" style={{ color: stage === 4 ? iconColor : iconDefaultColor }}></i>
                    <p style={{ color: stage === 4 ? textstyles : 'white' }}>Marketplace</p>
                </button>
            </div>
        </div>
    );
}

export default Sidebar