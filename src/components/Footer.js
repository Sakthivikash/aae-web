import React from "react";
import "./Footer.css";
import logo from "../images/AAE SEAL 2.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={logo} alt="AAE Logo" className="footer-logo" />
          <h2>Association of Aeronautical Engineers</h2>
          <p>
            AAE explores the unknown in air and space, innovates for the benefit
            of humanity, and inspires the world through discovery.
          </p>
          <a href="#mission" className="footer-link">
            About AAE's Mission
          </a>
          <br />
          <a href="#join" className="join-link">
            Join Us <span>→</span>
          </a>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <div>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#events">Events</a>
            <a href="#gallery">Gallery</a>
            <a href="teams.html">Team</a>
          </div>
          <div>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>
            <a href="#achievements">Achievements</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <a href="#careers">Careers</a>
            <a href="#internships">Internships</a>
            <a href="#resources">Resources</a>
            <a href="#alumni">Alumni</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-social">
          <h4>Follow AAE</h4>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <a href="#social-more" className="footer-link">
            More AAE Social Accounts
          </a>
          <br />
          <a href="#newsletter" className="footer-link">
            AAE Newsletters
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2025 Association of Aeronautical Engineers. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
