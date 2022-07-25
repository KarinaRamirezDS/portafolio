import React from "react";
import "./Cover.css";
import coverVideo from "../assets/coverVideo.mp4";

const Cover = () => {
  return (
    <div name="home" className="cover-container">

      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Developer Full-Stack</h1>
      <p>¡Bienvenido! </p>
    </div>
  );
};

export default Cover;