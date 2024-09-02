import react , {useRef}from "react"
import "../css/dashboard.css"
import Sidebar from "../components/sidebar";
import "../css/detect_disease.css"
import axios from "axios"
import video from "../Media/detectDisease.mp4";

function Stage3() {
  const [on, setOn] = react.useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    console.log("clicked");
    setOn(!on);
  }

  const handleVideoError = (e) => {
    console.error("Video error:", e);
  };

  const handleVideoLoad = () => {
    console.log("Video loaded successfully");
  };

  return (
    <div className="Disease_div">
      <div className="dd_left">
        <h3>Diagnose your sick crop</h3>
        <p>Take a photo of your sick crop and get a free diagnosis and suggestions - all in a few seconds</p>
        <button onClick={handleClick}>Get a free diagnosis</button>
      </div>
      <div className="dd_right">
        <video 
          ref={videoRef}
          width="120%"  
          autoPlay 
          muted
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
          loop

        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {on && <div className="diagnose">hello</div>}
    </div>
  );
}
export default Stage3
