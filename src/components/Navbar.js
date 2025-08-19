import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/AAE SEAL 2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="top-banner">
      <div className="container navbar-content">
        {/* Left: Logo + Text */}
        <div className="left-section">
          <img src={logo} alt="AAE Logo" className="logo" />
          <div className="text-content">
            <p>ASSOCIATION OF AERONAUTICAL ENGINEERS</p>
            <p>DEPARTMENT OF AEROSPACE ENGINEERING</p>
            <p>MADRAS INSTITUTE OF TECHNOLOGY</p>
          </div>
        </div>
        {/* Right: Nav Links (desktop) */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="/" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="/teams" onClick={() => setIsOpen(false)}>
                Teams
              </a>
            </li>
            <li>
              <a href="/people" onClick={() => setIsOpen(false)}>
                People
              </a>
            </li>
            {/* <li>
              <a href="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li> */}
            <li>
              <a href="/events" onClick={() => setIsOpen(false)}>
                Events
              </a>
            </li>

            <li>
              <a href="/about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* Hamburger Icon (mobile) */}
        <button
          className="menu-icon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
