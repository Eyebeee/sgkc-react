// Home.jsx

import React, { useState } from 'react';
import './header.css'; // Assuming header.css is in the same directory as Home.jsx

const Home = () => {
  const [language, setLanguage] = useState('한국어');

  const toggleText = () => {
    // Implement your specific requirements for toggleText function here
    setLanguage((prevLanguage) => (prevLanguage === '한국어' ? 'English' : '한국어'));
  };

  return (
    <>
      <header>
        {/* Church Logo */}
        <img src="imageWeb/sgkc4.png" width="225px" height="60px" alt="Church Logo" />

        {/* Title */}
        <h1 className="sameLine" id="sgkc">
          Sacramento Glory Korean Church
        </h1>

        {/* Eng/Kor Button */}
        <button className="sameLine" onClick={toggleText}>
          {language}
        </button>

        {/* Navigation bar */}
        <ul>
          <li>
            <a href="announcements.html" id="announcements">
              Announcements
            </a>
          </li>

          <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn" id="eventsDrop">
              Events &#x25BC;
            </a>
            <div className="dropdown-content">
              <a href="events.html" id="eventsPage">
                Events
              </a>
              <a href="pastEvents.html" id="past events">
                Past Events
              </a>
              <a href="photoGallery.html" id="photoGallery">
                Photo Gallery
              </a>
            </div>
          </li>
          {/* ... (similar modifications for other navigation items) */}
        </ul>

        <script src="Javascript/changeLanguages.js"></script>
      </header>

      <main>
        {/* Main content goes here*/}
        <h2 id="serviceSchedule">Church Service Schedule</h2>
        {/* Schedule description maybe? */}

        <table border="5">
          <thead>
            <tr>
              <th id="serviceScheduleDay">Day</th>
              <th id="serviceScheduleTime">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="serviceScheduleSunday">Sunday</td>
              <td>11:00 AM</td>
            </tr>
            <tr>
              <td id="serviceScheduleWednesday">Wednesday</td>
              <td>07:30 PM</td>
            </tr>
          </tbody>
        </table>

        <p>This is the Home page</p>
      </main>

      <footer>
        {/* Footer content goes here */}
        <p className="sameLine" style={{ fontSize: '12px' }}>
          Sacramento Glory Korean Church
          <br />
          1820 Bell Street
          <br />
          Sacramento, CA. 95825
        </p>
        <p className="sameLine" style={{ fontSize: '12px', float: 'right' }}>
          Contact Us: <a href="mailto: sacglorychurch@hotmail.com">sacglorychurch@hotmail.com</a>
        </p>
      </footer>
    </>
  );
};

export default Home;
