import react , {useRef , useState}from "react"
import "../css/dashboard.css"
import "../css/detect_disease.css"
import axios from "axios"
import video from "../Media/detectDisease.mp4";
import { CloudUpload } from 'lucide-react';

const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

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
    formData.append('image', file);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload successful:', response.data);
      alert('Image uploaded successfully!');
      setFile(null); // Clear the file after successful upload
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="file-upload-container">
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

      <p className="resultArea"></p>
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
            <h3>Upload Image</h3>
              <FileUpload/>
          </div>

        </div>}
    </div>
  );
}
export default Stage3
