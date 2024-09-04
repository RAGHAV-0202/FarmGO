import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/homepage.css";
import chinese from "../Media/chinese.jpg";
import magnifier from "../Media/magnifier.jpg";
import woman from "../Media/woman.jpg";
import email from "../Media/email.jpg";
import stats from "../Media/stats.jpg";
import protection from "../Media/plant_in_hand.jpg";
import logo from "../Media/logo.jpg";
import ImageSlider from "../components/image_slider";
const Header = () => {
  // State for burger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    {
      backgroundImage: chinese,
      title: "DISEASE DIAGNOSE",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ea, natus placeat iure pariatur itaque saepe sunt consequuntur, fuga hic sed et. Rerum quaerat alias quod eos deleniti perferendis ipsam culpa ut fugiat assumenda.",
    },
    {
      backgroundImage: magnifier,
      title: "CROP PROTECTION",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ea, natus placeat iure pariatur itaque saepe sunt consequuntur, fuga hic sed et. Rerum quaerat alias quod eos deleniti perferendis ipsam culpa ut fugiat assumenda.",
    },
    {
      backgroundImage: woman,
      title: "EXPERT CONSULTATIONS",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ea, natus placeat iure pariatur itaque saepe sunt consequuntur, fuga hic sed et. Rerum quaerat alias quod eos deleniti perferendis ipsam culpa ut fugiat assumenda.",
    },
    {
      backgroundImage: email,
      title: "QUICK NOTIFICATIONS",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ea, natus placeat iure pariatur itaque saepe sunt consequuntur, fuga hic sed et. Rerum quaerat alias quod eos deleniti perferendis ipsam culpa ut fugiat assumenda.",
    },
    {
      backgroundImage: stats,
      title: "DATA ANALYSIS",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ea, natus placeat iure pariatur itaque saepe sunt consequuntur, fuga hic sed et. Rerum quaerat alias quod eos deleniti perferendis ipsam culpa ut fugiat assumenda.",
    },
    {
      backgroundImage: protection,
      title: "CROP PROTECTION",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ea, natus placeat iure pariatur itaque saepe sunt consequuntur, fuga hic sed et. Rerum quaerat alias quod eos deleniti perferendis ipsam culpa ut fugiat assumenda.",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, 2000); // 7 seconds

    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  const handleNext = () => {
    // console.log("clicked")
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  // Burger menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* <video autoplay muted loop>
        <source src="./main_background.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video> */}
      <nav>
        <div className="logo">
          <h1>FASALguru</h1>
        </div>
        <div className="logo_image">
          <img src={logo} alt="FASALguru Logo" />
        </div>
        <ul className={`nav_links ${isMenuOpen ? "nav-active" : ""}`}>
          {/* Uncomment and adjust links as needed */}
          {/* 
          <li><a className="list_items" href="#home">HOME</a></li>
          <li><a className="list_items" href="#weather">WEATHER</a></li>
          <li><a className="list_items" href="#camera">CAMERA</a></li>
          <li><a className="list_items" href="#calendar">CALENDAR</a></li>
          <li><a className="list_items" href="#profile">YOUR PROFILE</a></li> 
          */}
          <li>
            <Link className="list_items" to="/app">
              Login
            </Link>
          </li>
          <li>
            <Link className="list_items" to="/about">
              About Us
            </Link>
          </li>
        </ul>
        <div className={`burger ${isMenuOpen ? "toggle" : ""}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <div className="carousal">
        <div className="list">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`item ${index === currentIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
            >
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="des">{item.description}</div>
                <div className="btn">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
        <button className="prev" onClick={handlePrev}>
            &lt;
        </button>
        <button className="next" onClick={handleNext}>
            &gt;
        </button>
        </div>
        <div className="timeRunning"></div>
      </div>
    </header>
  );
};


const Slider = ()=>{
    const slides = [
    { url: chinese, title: "beach" },
    { url: magnifier, title: "boat" },
    { url: woman, title: "forest" },
    { url: email, title: "city" },
    { url: stats, title: "italy" },
    { url: protection, title: "italy" },
    // { url: {stats}, title: "italy" },

  ];
  const containerStyles = {
    width: "100vh",
    height: "100vh",
    margin: "0 auto",
  };
  return (
    <div>
      {/* <h1>Hello monsterlessons</h1> */}
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};





function HomePage(){
    return(
        <Header/>
    )
}

export default HomePage