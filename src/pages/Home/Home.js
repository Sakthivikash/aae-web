import React from "react";
import "./Home.css";
import highlight from "../../images/highlight.jpg";
import highlight2 from "../../images/highlight2.jpg";
import highlight3 from "../../images/highlight3.jpg";
import aboutImg from "../../images/AAE SEAL 2.png";
import sponsor1 from "../../images/sponser1.png";
import sponsor2 from "../../images/sponsor2.jpg";
import sponsor3 from "../../images/sponsor3.jpg";
import sponsor4 from "../../images/sponsor4.jpg";
import sponsor5 from "../../images/sponsor5.jpg";
import sponsor6 from "../../images/sponsor6.jpg";
import sponsor7 from "../../images/sponsor7.jpg";
import sponsor8 from "../../images/sponsor8.jpg";
import sponsor9 from "../../images/sponsor9.jpg";
import workshop from "../../images/workshop.jpg";
import seminars from "../../images/seminars.jpg";
import guestLect from "../../images/g-lect.jpg";
import techEvent from "../../images/tech-event.jpg";
import IV from "../../images/IV.jpg";
import Research from "../../images/Research.jpg";
import AECompt from "../../images/AE-compt.jpg";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="container hero-inner">
          <h1>Soaring Beyond Limits</h1>
          <p>
            Welcome to the Association of Aeronautical Engineers – where
            innovation meets the sky.
          </p>
          <div className="buttons">
            <a href="#events" className="btn">
              Explore Events
            </a>
            <a href="#join" className="btn-outline">
              Join Us
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container about-inner">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              The Association of Aeronautical Engineers (AAE) is the official
              student body of the Department of Aerospace Engineering at Madras
              Institute of Technology (MIT). Comprising passionate students and
              dedicated faculty advisors, AAE serves as a dynamic platform for
              academic enrichment, technical collaboration, and professional
              development. Our mission is to bridge the gap between theoretical
              knowledge and practical exposure through a variety of initiatives.
              AAE organizes impactful seminars, interactive guest lectures, and
              hands-on workshops led by distinguished alumni, eminent
              researchers, and industry experts from premier institutions such
              as IITs, and organizations like ISRO, DRDO, DRDL, and other
              leading aerospace R&D centers. One of our flagship events is the
              annual technical symposium – ‘FLIGHT’, which fosters
              knowledge-sharing and innovation through a range of intra- and
              inter-collegiate events. Through these efforts, AAE continues to
              inspire and empower the next generation of aerospace pioneers.
            </p>
            <p className="mission">
              Our mission? To inspire, educate, and elevate — one launch at a
              time.
            </p>
            <div className="about-stats">
              <div className="stat-box">
                <h3>15+</h3>
                <p>Years of Innovation</p>
              </div>
              <div className="stat-box">
                <h3>120+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-box">
                <h3>50+</h3>
                <p>Achievements</p>
              </div>
              <div className="stat-box">
                <h3>200+</h3>
                <p>Members</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={aboutImg} alt="AAE Logo" />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do">
        <h2>What We Do</h2>
        <div className="slider">
          <div className="slider-track">
            <div
              className="box"
              style={{ backgroundImage: `url(${workshop})` }}
            >
              <div className="overlay">
                <span> Workshops</span>
              </div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${seminars})` }}
            >
              <div className="overlay">
                <span>Seminars</span>
              </div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${guestLect})` }}
            >
              <div className="overlay">
                <span>Guest Lectures</span>
              </div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${techEvent})` }}
            >
              <div className="overlay">
                <span>Technical Events</span>
              </div>
            </div>
            <div className="box" style={{ backgroundImage: `url(${IV})` }}>
              <div className="overlay">
                <span>Industrial Visits</span>
              </div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${Research})` }}
            >
              <div className="overlay">
                <span>Research Collaborations</span>
              </div>
            </div>
            <div className="box" style={{ backgroundImage: `url(${AECompt})` }}>
              <div className="overlay">
                <span>Aerospace Competitions</span>
              </div>
            </div>

            {/* Duplicate */}
            <div
              className="box"
              style={{ backgroundImage: `url(${workshop})` }}
            >
              <div className="overlay">
                <span> Workshops</span>
              </div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${seminars})` }}
            >
              <div className="overlay">
                <span>Seminars</span>
              </div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${guestLect})` }}
            >
              <div className="overlay">
                <span>Guest Lectures</span>
              </div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${techEvent})` }}
            >
              <div className="overlay">
                <span>Technical Events</span>
              </div>
            </div>
            <div className="box" style={{ backgroundImage: `url(${IV})` }}>
              <div className="overlay">
                <span>Industrial Visits</span>
              </div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${Research})` }}
            >
              <div className="overlay">
                <span>Research Collaborations</span>
              </div>
            </div>
            <div className="box" style={{ backgroundImage: `url(${AECompt})` }}>
              <div className="overlay">
                <span>Aerospace Competitions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section id="upcoming-events">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="event-container">
          <div className="event-card">
            <div className="event-date">Aug 25, 2025</div>
            <h3>Flight 2025 Symposium</h3>
            <p>
              Annual aerospace symposium featuring keynote talks, workshops, and
              competitions.
            </p>
            <a href="#" className="btn event-btn">
              Register
            </a>
          </div>
          <div className="event-card">
            <div className="event-date">Sep 10, 2025</div>
            <h3>Guest Lecture: ISRO Scientist</h3>
            <p>
              Insights on India's space missions and career opportunities in
              aerospace.
            </p>
            <a href="#" className="btn event-btn">
              Register
            </a>
          </div>
          <div className="event-card">
            <div className="event-date">Oct 3, 2025</div>
            <h3>Drone Design Workshop</h3>
            <p>
              Hands-on workshop on UAV design, control systems, and flight
              tests.
            </p>
            <a href="#" className="btn event-btn">
              Register
            </a>
          </div>
        </div>
      </section>

      {/* PAST HIGHLIGHTS */}
      <section id="past-highlights">
        <h2 className="section-title">Past Highlights</h2>
        <div className="highlight-grid">
          <div className="highlight-card fade-in">
            <img src={highlight} alt="Highlight 1" />
            <h3>Flight 2024</h3>
            <p>
              Over 500 participants joined our flagship aerospace symposium.
            </p>
          </div>
          <div className="highlight-card fade-in">
            <img src={highlight2} alt="Highlight 2" />
            <h3>ISRO Collaboration</h3>
            <p>Joint seminar with ISRO engineers on Mars Orbiter Mission.</p>
          </div>
          <div className="highlight-card fade-in">
            <img src={highlight3} alt="Highlight 3" />
            <h3>Drone Race Challenge</h3>
            <p>Students showcased innovative UAV designs and racing skills.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <h2 className="section-title">Message from Office Bearers</h2>
        <div className="testimonial-container">
          <div className="testimonial left">
            <p>
              "AAE provided me the platform to explore aerospace beyond
              textbooks."
            </p>
            <h4>- Alumni, ISRO Engineer</h4>
          </div>
          <div className="testimonial right">
            <p>
              "The symposium ‘Flight’ is a perfect blend of technical learning
              and fun."
            </p>
            <h4>- Aerospace Student, MIT</h4>
          </div>
          <div className="testimonial left">
            <p>
              "Workshops and guest lectures by industry experts are truly
              inspiring."
            </p>
            <h4>- DRDO Scientist</h4>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors">
        <h2 className="section-title">Our Sponsors & Collaborators</h2>
        <div className="sponsor-logos">
          <img src={sponsor1} alt="Sponsor 1" />
          <img src={sponsor2} alt="Sponsor 2" />
          <img src={sponsor3} alt="Sponsor 3" />
          <img src={sponsor4} alt="Sponsor 4" />
          <img src={sponsor5} alt="Sponsor 5" />
          <img src={sponsor6} alt="Sponsor 6" />
          <img src={sponsor7} alt="Sponsor 7" />
          <img src={sponsor8} alt="Sponsor 8" />
          <img src={sponsor9} alt="Sponsor 9" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="join">
        <div className="container">
          <h2>Ready to Take Off with Us?</h2>
          <p>
            Whether you're a curious fresher or a final-year innovator, AAE
            welcomes all aspiring aviators.
          </p>
          <a href="#" className="btn">
            Become a Member
          </a>
        </div>
      </section>
    </main>
  );
}
