import React from "react";
import "./cover.css";
import coverVideo from "../../media/coverVideo.mp4";

export default function Cover() {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Aranguren Lucas</h1>
      <p>Full Stack Developer</p>
    </div>
  );
}
