import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <section>
        <div class="about-section">
          <h1>About AAE</h1>
          <p class="intro">
            The story behind our student-led association and our mission to
            inspire excellence in aerospace engineering.
          </p>
        </div>
      </section>

      {/* <!-- OUR STORY --> */}
      <section class="section">
        <div class="container flex">
          <div class="story">
            <h2 className="section-title">Our Story</h2>
            <p>
              The <strong>Association of Aeronautical Engineers (AAE)</strong>{" "}
              is the official student body of the Department of Aerospace
              Engineering at Madras Institute of Technology (MIT), Anna
              University. Established in 1953, AAE stands as one of the oldest
              and most vibrant student-led organizations in the institution,
              with a legacy of over seven decades.
            </p>
            <p>
              AAE functions as a completely student-driven organization. From
              conceptualization to execution, all responsibilities related to
              event management, finance, public relations, and technical
              operations are handled by students. This fosters leadership,
              teamwork, and a strong sense of belonging among its members.
            </p>
          </div>
          <div class="mission-vision">
            <h3>Our Mission</h3>
            <p>
              To create an engaging platform that bridges academics and
              industry, encouraging innovation, skill development, and
              professional networking for aspiring aerospace engineers.
            </p>
            <h3>Our Vision</h3>
            <p>
              To be recognized as a leading student-led aerospace body,
              inspiring technical excellence, collaborative learning, and
              holistic student growth in the field of aerospace engineering.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- OUR VALUES --> */}
      <section class="values-section">
        <h2 className="section-title">Our Values</h2>
        <p>The core principles that guide our initiatives and team culture.</p>
        <div class="values-grid">
          <div class="value-card">
            <i class="fas fa-lightbulb"></i>
            <h4>Innovation</h4>
            <p>
              Encouraging creativity and embracing cutting-edge aerospace
              technologies.
            </p>
          </div>
          <div class="value-card">
            <i class="fas fa-medal"></i>
            <h4>Excellence</h4>
            <p>
              Upholding the highest standards in technical and organizational
              pursuits.
            </p>
          </div>
          <div class="value-card">
            <i class="fas fa-users"></i>
            <h4>Collaboration</h4>
            <p>
              Working across disciplines with students, alumni, and industry
              experts.
            </p>
          </div>
          <div class="value-card">
            <i class="fas fa-rocket"></i>
            <h4>Impact</h4>
            <p>
              Creating meaningful contributions to aerospace education and
              innovation.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- LEGACY --> */}
      <section class="section legacy-section">
        <h2 className="section-title">Our Legacy</h2>
        <div class="legacy-box">
          <div class="legacy-col">
            <h3>Notable Achievements</h3>
            <ul>
              <li>
                Seven decades of leadership in aerospace student activities
                since 1953
              </li>
              <li>
                Flagship annual symposium <strong>FLIGHT</strong> attracting
                nationwide participation
              </li>
              <li>
                Hosted national & international level technical seminars and
                workshops
              </li>
              <li>
                Strong collaborations with DRDO, ISRO, NAL, and aerospace
                industries
              </li>
            </ul>
          </div>
          <div class="legacy-col">
            <h3>Recent Highlights</h3>
            <ul>
              <li>
                One Day Technical Seminar on <em>Youth Awakening Day</em> with
                industry leaders
              </li>
              <li>
                Two-Day National Seminar on Emerging Aerospace Technologies
              </li>
              <li>FLIGHT’25 – 300+ registrations, 10+ workshops & contests</li>
              <li>
                Annual Alumni Meet fostering strong alumni-student connections
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
