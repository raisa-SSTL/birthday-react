import React from "react";

import "./styles.css";
import StarfieldAnimation from "react-starfield-animation";
import { Typewriter } from "react-simple-typewriter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Background({ onThumbsUpClick }) {

  const notify = () => toast("Think again, dumbass 🙄");

  return (

    <div className="background-container">
      {/* Starfield Background */}
      <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%"
        }}
        numParticles={800}
        particleSpeed={0}
        dx={0.000000001} 
        dy={0.000000001}
      />
      {/* Text Overlay */}
      <div className="overlay-text">
        <h1>
          <Typewriter
            words={["It's your day, Captain!"]}
            loop={1} // Run once
            typeSpeed={100}
            deleteSpeed={50}
            cursor
          />
        </h1>
        <p>
          <Typewriter
            words={["                            Are you ready?"]}
            loop={1}
            typeSpeed={100}
            deleteSpeed={50}
            cursor
          />
        </p>
        {/* Buttons */}
        <div className="button-container">
          <button className="btn" onClick={onThumbsUpClick}>👍</button>  
          <button className="btn" onClick={notify}>👎</button>  
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
