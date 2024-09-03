import react , {useRef , useState}from "react"
import "../css/dashboard.css"
import "../css/detect_disease.css"
import axios from "axios"
import video from "../Media/detectDisease.mp4";
import { CloudUpload } from 'lucide-react';

function Causes({cause}){
  return(
    <p><i class="fa-solid fa-circle-dot"></i>{cause}</p>
  )
}

const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const fileInputRef = useRef(null);

  const [openSection, setOpenSection] = useState("causes"); 
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // const [newData , setNewData] = react.useState(data)
  const data =  [
    {
      "name": "Apple Scab"
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhDjUL8CvUcVtmv8_UTpE7hiWA2-x_zKOzw&s"
    },
    {
      "prevention": [
        "Planting scab-resistant apple varieties",
        "Regular pruning to improve air circulation",
        "Removing and destroying fallen leaves and infected plant debris",
        "Applying appropriate fungicides during the early growing season",
        "Watering at the base of trees to reduce leaf wetness"
      ]
    },
    {
      "causes": [
        "Caused by the fungus Venturia inaequalis",
        "High humidity and rainfall promote fungal growth",
        "The fungus overwinters in fallen leaves and releases spores in the spring",
        "Certain apple varieties are more prone to the disease"
   ]
  }
]
// console.log(data[3].causes)
// data[3].causes.map((cause)=>{
//   console.log(cause)
//   return{
//     cause
//   }
// })


  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    handleFile(selectedFile);
  };

  const handleFile = (newFile) => {
    if (newFile && newFile.type.startsWith('image/')) {
      setFile(newFile);
      console.log('File selected:', newFile);
    } else {
      alert('Please select an image file.');
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Please select an image file first.');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://f88b-122-173-30-21.ngrok-free.app/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload successful:', response.data);
      alert('Image uploaded successfully!');
      setFile(null);
      setShowContent(false); 
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload image. Please try again.');
      setShowContent(false); 
    } finally {
      setUploading(false);
    }
  };

    if (!showContent) {
    return (
      <div className="file-upload-container result_area_for_disease">
        <img
          src={data[1].image}
          alt="diseased_img"
        />
        <h3>{data[0].name}</h3>
        <div className="disease_info">
          <div className="disease_info_left shadow">
            <h4 onClick={() => toggleSection('causes')}>Causes <span>{openSection === 'causes' && <i class="fa-solid fa-minus"></i> } {openSection !== 'causes' && <i class="fa-solid fa-plus"></i> } </span></h4>
            {openSection === 'causes' &&
              data[3].causes.map((cause, index) => (
                <Causes key={index} cause={cause} />
              ))}
          </div>
          <div className="disease_info_right shadow">
            <h4 onClick={() => toggleSection('preventions')}>Prevention <span>{openSection === 'causes' && <i class="fa-solid fa-minus"></i> } {openSection !== 'causes' && <i class="fa-solid fa-plus"></i> } </span> </h4>
            {openSection === 'preventions' &&
              data[2].prevention.map((prevention, index) => (
                <Causes key={index} cause={prevention} />
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="file-upload-container shadow">
      <h3>Upload Image</h3>
      <div 
        className={`drop-area ${isDragging ? 'dragging' : ''}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CloudUpload className="cloud-icon" />
        <p className="main-text">Drag & Drop your image here</p>
        <p className="or-text">or</p>
        <button className="browse-button" onClick={handleBrowseClick}>
          Browse to upload image
        </button>
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          onChange={handleFileInput}
          accept="image/*"
        />
        <p className="file-info">
          Only image formats with max file size of 10 MB
        </p>
        {file && (
          <div className="selected-file">
            <p>Selected image: {file.name}</p>
          </div>
        )}
      </div>
      <button 
        className="submit-button" 
        onClick={handleSubmit} 
        disabled={!file || uploading}
      >
        {uploading ? 'Uploading...' : 'Submit'}
      </button>
    </div>
  );
};


function Stage3() {
  const [on, setOn] = react.useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    console.log("clicked");
    setOn(true);
  }
  function handleClose(){
    setOn(false)
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
          width="105%"  
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
  {on && <div className="diagnose shadow flex">

          <div className="imageUploadArea  flex">
            <button className="closebutton" onClick={handleClose}>X</button>
            
              <FileUpload/>
          </div>

        </div>}
    </div>
  );
}
export default Stage3

