import React from "react";
import "./Teams.css";
import "../../pages/Home/Home.css";
import props from "../../images/props.jpg";
import avion from "../../images/avion.jpg";

export default function Teams() {
  return (
    <section class="teams-section">
      <h1>Our Teams</h1>
      <p class="intro">
        Meet the driving force behind AAE. Each team is dedicated to pushing the
        limits of aerospace innovation through collaboration, expertise, and a
        shared passion for flight. We are a group of passionate individuals
        working together to achieve excellence and innovation.
      </p>
      {/* -- BUTTON SECTION -- */}
      <div class="team-buttons">
        <a href="#" class="btn">
          Team Members
        </a>
        <a href="#" class="btn">
          Monthly Report
        </a>
        <a href="#" class="btn">
          Team Logs
        </a>
      </div>

      {/* -- TEAM CARD 1 -- */}
      <div class="team-card">
        <div class="team-img">
          <img src={props} alt="Team 1" />
        </div>
        <div class="team-details">
          <h2>STUDENT WELFARE TEAM</h2>
          <p>
            The Student Welfare Team of the Association of Aeronautical
            Engineers aims to support and empower students. The team provides a
            platform for students to voice their concerns, share ideas, and
            develop professionally. The team also offers opportunities for
            students to develop their skills and gain industry insights. Our
            goal is to create a community where students can thrive, share
            ideas, and grow together.
          </p>
          <p>
            <strong>Team Heads:</strong> John Doe, Jane Smith
          </p>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:team@aae.com">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/*-- TEAM CARD 2 --*/}
      <div class="team-card reverse">
        <div class="team-img">
          <img src={avion} alt="Team 2" />
        </div>
        <div class="team-details">
          <h2>ACADEMICS TEAM</h2>
          <p>
            Our motive is to enrich the technical knowledge of students through
            focused learning and practical exposure. Our works include
            structured GATE AE sessions with structured sessions, Students
            Collaboration Projects through which students with common interests
            join together working on projects and showcasing aerospace concepts,
            trends and innovations through association's YouTube channel "Aero
            verse". One of the most notable works of our team is the 'Magazine'.
            It is a 24 page monthly magazine, that comprises articles based on a
            theme, student articles, news related to the field of aeronautics,
            crossword puzzles, etc.,
          </p>
          <p>
            <strong>Team Heads:</strong> Alice Brown, Michael Green
          </p>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:team@aae.com">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* -- TEAM CARD 3 -- */}
      <div class="team-card">
        <div class="team-img">
          <img src={props} alt="Team 1" />
        </div>
        <div class="team-details">
          <h2>RENOVATION TEAM</h2>
          <p>
            The team has harboured on a task of thorough analysis of the various
            amenities of our department, such as the classrooms, labs, study
            models. Following this assessment, listing of necessary facilities,
            and their quotations, as inquired from trusted sources, compiled
            with suggestions from professors will constitute a document. This
            document is our goal, wherein we approach our alumni for potential
            funding, and forward it to the management so that it takes upon
            itself the renovation our department demands.
          </p>
          <p>
            <strong>Team Heads:</strong> John Doe, Jane Smith
          </p>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:team@aae.com">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/*-- TEAM CARD 4 --*/}
      <div class="team-card reverse">
        <div class="team-img">
          <img src={avion} alt="Team 2" />
        </div>
        <div class="team-details">
          <h2>DESIGN, EDITING AND SOCIAL MEDIA HANDLING TEAM</h2>
          <p>
            The Design, Editing, and Social Media Handling Team is dedicated to
            crafting visually stunning and diverse poster designs for our
            department’s workshops, seminars, and symposiums, ensuring each
            event is showcased with creativity and impact. Our skilled video
            editing team produces high-quality, captivating content for our
            YouTube channel, elevating our brand’s presence with professional
            and engaging videos. We also expertly manage our Association’s
            social media platforms, delivering consistent, timely, and dynamic
            updates to keep our supporters informed, inspired, and connected.
            With a passion for innovation and excellence, we strive to amplify
            our department’s vision, foster community engagement, and set new
            standards in creative communication.
          </p>
          <p>
            <strong>Team Heads:</strong> Alice Brown, Michael Green
          </p>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:team@aae.com">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      {/* -- TEAM CARD 5 -- */}
      <div class="team-card">
        <div class="team-img">
          <img src={props} alt="Team 1" />
        </div>
        <div class="team-details">
          <h2>ALUMNI CONTACT TEAM</h2>
          <p>
            The long-term vision is to create a complete, accurate, and
            well-maintained alumni database that serves as the backbone for all
            engagement activities. For AAE 2025–26, the focus will be on using
            insights from Google Form responses to design seminars, guest
            lectures, and other meaningful interactions. A key highlight of the
            year will be the “Alumni Tunnel” event, aimed at celebrating and
            reconnecting past students. Building harmonical relationship with
            alumni - This includes refining existing contact records, welcoming
            new alumni connections, and keeping interactions consistent
            throughout the year.
          </p>
          <p>
            <strong>Team Heads:</strong> John Doe, Jane Smith
          </p>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:team@aae.com">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/*-- TEAM CARD 6 --*/}
      <div class="team-card reverse">
        <div class="team-img">
          <img src={avion} alt="Team 2" />
        </div>
        <div class="team-details">
          <h2>TREASURY ASSISTANCE TEAM</h2>
          <p>
            Our team involves in Preparing a detailed budget estimate for all
            expected expenses. Also in Collecting and digitally storing all
            bills and receipts.To keep track of all transactions related to the
            event. Summarizing all actual expenses with supporting
            documentation. Analyzing the differences between planned and actual
            costs and use the analysis to improve future budget estimates.
          </p>
          <p>
            <strong>Team Heads:</strong> Alice Brown, Michael Green
          </p>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:team@aae.com">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      {/* -- TEAM CARD 7 -- */}
      <div class="team-card">
        <div class="team-img">
          <img src={props} alt="Team 1" />
        </div>
        <div class="team-details">
          <h2>EVENT INCHARGES TEAM</h2>
          <p>
            As the Event Incharges Team, we take responsibility for planning,
            coordinating, and ensuring the smooth execution of events.
            Especially, we indulge in conducting technical competitions,
            workshops, seminars, lectures, etc. We manage schedules, assign
            tasks, and maintain clear communication between all the teams.
          </p>
          <p>
            <strong>Team Heads:</strong> John Doe, Jane Smith
          </p>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:team@aae.com">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/*-- TEAM CARD 8 --*/}
      <div class="team-card reverse">
        <div class="team-img">
          <img src={avion} alt="Team 2" />
        </div>
        <div class="team-details">
          <h2>DOCUMENTATION, CONTENT WRITING & MCs TEAM</h2>
          <p>
            This team is responsible for recording and maintaining all official
            records of events, meetings, and activities conducted by the
            association. They prepare detailed reports, minutes of meetings, and
            event summaries to ensure proper archival of information.
          </p>
          <p>
            <strong>Team Heads:</strong> Alice Brown, Michael Green
          </p>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:team@aae.com">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      {/* -- TEAM CARD 9 -- */}
      <div class="team-card">
        <div class="team-img">
          <img src={props} alt="Team 1" />
        </div>
        <div class="team-details">
          <h2>ORGANISING COMMITTEE & LOGISTICS HANDLING TEAM</h2>
          <p>
            This team plays a pivotal role in planning, coordinating, and
            executing departmental events and activities. They manage logistics,
            scheduling, and communication to ensure smooth operations. The team
            works closely with faculty, students, and external partners to
            deliver impactful and well-organized events.
          </p>
          <p>
            <strong>Team Heads:</strong> John Doe, Jane Smith
          </p>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:team@aae.com">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* -- More team cards here... -- */}
    </section>
  );
}
