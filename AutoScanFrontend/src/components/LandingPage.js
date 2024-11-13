import React from "react"
import { Link } from "react-router-dom"
import "./LandingPage.css" // Import the CSS file
import Aeroearth from "./images/Aeroearth.jpg" // Import the image

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="left-content">
        <h1 className="heading">AutoScan</h1>
        <h2>Welcome to AutoScan: Your Vehicles Safety and Processes Efficiency Companion</h2>
        <p>AutoScan is a cutting-edge platform for detecting automobiles damages and faulty wiring, ensuring the safety with compliance. With advanced image analysis and AI-driven technology, we provide accurate inspections for maintenance professionals and enthusiasts alike. Join us in revolutionizing processes automation for the automobiles development and maintenance with our comprehensive inspection solutions.</p>
        <ul>
          <li className="btn-1">
            <Link to="/image-analysis" className="button">
              Image Assessment
            </Link>
          </li>
          <li className="btn-2">
            <Link to="/damage-detection" className="button">
              Damage Assessment
            </Link>
          </li>
          <li className="btn-2">
            <Link to="/virtual-simu-CAD" className="button">
              Virtual Simulation for CAD
            </Link>
          </li>
        </ul>
      </div>
      <div className="right-content">
        {" "}
        <img src={Aeroearth} alt="Placeholder" />{" "}
      </div>
    </div>
  )
}

export default LandingPage
