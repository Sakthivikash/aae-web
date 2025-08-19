import React from "react";
import "./Events.css"; // optional if you want styling
import { FaTools } from "react-icons/fa"; // little icon for style

export default function Events() {
  return (
    <div className="events-container">
      <div className="under-construction">
        <FaTools className="icon" />
        <h1>Events Page</h1>
        <p>🚧 This page is currently under construction 🚧</p>
        <p>Please check back soon for updates!</p>
      </div>
    </div>
  );
}
