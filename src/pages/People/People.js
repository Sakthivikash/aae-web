import React from "react";
import "./People.css";
import "../../pages/Home/Home.css";
import CP from "../../images/CP.jpg";
import SECT from "../../images/SECT.jpg";
import VCP from "../../images/VCP.jpg";

export default function People() {
  return (
    <>
      {/* -- PAGE TITLE -- */}
      <section class="people-intro">
        <div class="container">
          <h1 style={{ fontSize: "24px" }}>PEOPLE</h1>
          <p>
            Meet the passionate individuals who power the Association of
            Aeronautical Engineers — from our student leaders to our esteemed
            faculty advisor.
          </p>
        </div>
      </section>

      {/* -- PEOPLE CARDS -- */}
      <section class="people-list">
        {/* -- Member 1 -- */}
        <div class="people-card left">
          <div class="people-image">
            <img src={CP} alt="Person 1" />
          </div>
          <div class="people-details">
            <h2>Chelian N G</h2>
            <h4>Chairperson</h4>
            <p>
              The Association of Aeronautical Engineers (AAE) stands by its
              motto: “Empowering & Upskilling Students.” It envisions as an
              organisation, that is run entirely by students, for students. From
              managing finances to planning events, from organising workshops to
              serving as resource persons, every initiative is student-driven.
              This unique structure not only deepens subject knowledge but also
              strengthens management and social skills. It gives members
              first-hand experience of how an organisation operates, fostering
              leadership, teamwork, and responsibility. In essence, AAE is more
              than a student body — it is a platform where students grow into
              professionals, gaining the confidence and skills to excel in the
              aeronautical industry and beyond.
            </p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="mailto:johndoe@example.com">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        {/* -- Member 2 -- */}
        <div class="people-card right">
          <div class="people-image">
            <img src={SECT} alt="Person 2" />
          </div>
          <div class="people-details">
            <h2>Arun V</h2>
            <h4>Secretary</h4>
            <p>
              We will make learning more than just classroom theory. We aim to
              create platforms where students can apply their knowledge in real,
              practical ways and experience the thrill of turning ideas into
              reality. Through various events and activities, AAE will be a
              stage for every student to showcase their unique talents and
              creativity. At the same time, we believe growth should be joyful —
              so we’re bringing a mix of fun, engaging, and inspiring
              experiences. Let’s learn, laugh, explore, and fly higher together
              as one AAE family
            </p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="mailto:janesmith@example.com">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        {/* -- Member 3 -- */}
        <div class="people-card left">
          <div class="people-image">
            <img src={CP} alt="Person 1" />
          </div>
          <div class="people-details">
            <h2>Saniya Banu Y</h2>
            <h4>Program Coordinator</h4>
            <p>
              Welcome to the Association of Aeronautical Engineers (AAE). Our
              mission is to create a platform where students and professionals
              can grow, exchange ideas, and contribute to the advancement of the
              aerospace sector and to ensure that every program we conduct adds
              value, sparks curiosity, and prepares the next generation of
              aeronautical leaders. Looking forward to a future of growth and
              shared success.
            </p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="mailto:johndoe@example.com">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        {/* -- Member 4 -- */}
        <div class="people-card right">
          <div class="people-image">
            <img src={SECT} alt="Person 2" />
          </div>
          <div class="people-details">
            <h2>Rohan Kishore K</h2>
            <h4>Vice – Chairperson</h4>
            <p>
              Welcome to AAE!, I’m proud to be part of a team that supports
              learning, teamwork, and innovation in aeronautics. Our goal is to
              help students grow through hands-on experience and technical
              events. Together, let’s build a strong and active community that
              reaches greater heights in aerospace.
            </p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="mailto:janesmith@example.com">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>{" "}
        {/* -- Member 5 -- */}
        <div class="people-card left">
          <div class="people-image">
            <img src={CP} alt="Person 1" />
          </div>
          <div class="people-details">
            <h2>Ezhilarasu N</h2>
            <h4>Treasurer</h4>
            <p>
              It is an honor to support a community driven by innovation,
              learning, and collaboration. Our mission is to empower students
              through practical exposure and technical growth. We believe in a
              clear vision— building a vibrant, resourceful platform where
              future aerospace leaders thrive, contribute, and elevate the
              field. I’m here to ensure that every rupee fuels your ideas, and
              that our organization stays on track financially while reaching
              for new heights Together, let’s aim higher and achieve more. Let’s
              keep building something amazing—together!
            </p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="mailto:johndoe@example.com">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        {/* -- Member 6 -- */}
        <div class="people-card right">
          <div class="people-image">
            <img src={SECT} alt="Person 2" />
          </div>
          <div class="people-details">
            <h2>Oviya K L</h2>
            <h4>Joint Secretary</h4>
            <p>
              I warmly welcome you to our community of passionate learners and
              innovators. Our mission is to advance aeronautical engineering
              through knowledge sharing, collaboration, and hands on experience.
              Together, we’ll break barriers, push boundaries, and shape the
              future of aviation. Here, "The sky isn’t the limit, it’s just the
              beginning"
            </p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="mailto:janesmith@example.com">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>{" "}
        {/* -- Repeat alternating left/right -- */}
        {/* -- Faculty Card -- */}
        <div class="people-card faculty">
          <div class="people-image">
            <img src={VCP} alt="Faculty Incharge" />
          </div>
          <div class="people-details">
            <h2>Prof. Dr. Priya Sharma</h2>
            <h4>Faculty Incharge</h4>
            <p>
              Guiding the AAE with wisdom and expertise, nurturing talent and
              fostering innovation among students in the field of aerospace
              engineering.
            </p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="mailto:priyasharma@example.com">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
