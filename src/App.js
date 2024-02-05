import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
<header>
    <!--Church Logo -->
    <img src="imageWeb/sgkc4.png" 
    width="225px" height="60px">

    <!--Title-->
    <h1 class = "sameLine" id = "sgkc">Sacramento Glory Korean Church</h1>

    <!--Eng/Kor Button-->
    <button class = "sameLine" onclick="toggleText(this)">한국어</button>

    <!-- Navigation bar -->
    <ul>
        <li><a href="announcements.html" id = "announcements">Announcements</a></li>

        <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn" id = "eventsDrop">Events &#x25BC;</a>
            <div class="dropdown-content">
                <a href="events.html" id = "eventsPage">Events</a>
                <a href="pastEvents.html" id = "past events">Past Events</a>
                <a href="photoGallery.html" id = "photoGallery">Photo Gallery</a>
            </div>
        </li>
        <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn" id = "sermons">Sermons &#x25BC;</a>
            <div class="dropdown-content">
                <a href="upcomingSerms.html" id = "upcomingSermons">Upcoming</a>
                <a href="previousSerms.html" id = "previousSermons">Previous</a>
            </div>
        </li>

        <li><a href="services.html" id = "services">Services</a></li>

        <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn" id = "aboutUs">About Us &#x25BC;</a>
            <div class="dropdown-content">
                <a href="ourBeliefs.html" id = "ourBeliefs">Our Beliefs</a>
                <a href="ourGoals.html" id = "ourGoals">Our Goals</a>
                <a href="dateTime.html" id = "dateTime">Date / Time</a>
                <a href="languages.html" id = "languages">Language</a>
            </div>
        </li>
        <li><a class="active" href="default.html" id = "home">Home</a></li>
    </ul>

    <script src = 'Javascript/changeLanguages.js'></script>
</header>

<main>
    <!-- Main content goes here-->
    <h2 id = "serviceSchedule">Church Service Schedule</h2>
    <!--Schedule description maybe? -->

    <table border = "5">
        <tr> 
            <th id = "serviceScheduleDay">Day</th>
            <th id = "serviceScheduleTime">Time</th>
        </tr>

        <tr>
            <td id = "serviceScheduleSunday">Sunday</td>
            <td>11:00 AM</td>
        </tr>

        <tr>
            <td id = "serviceScheduleWednesday">Wednesday</td>
            <td> 07:30 PM  </td>
        </tr>

    </table>

    <p>This is the Home page</p>
</main>

<footer>
    <!-- Footer content goes here -->
    <p class = "sameLine" style = "font-size:12px">Sacramento Glory Korean Church<br>1820 Bell Street<br>Sacramento, CA. 95825</p>
    <p class = "sameLine" style = "font-size:12px; float:right">Contact Us: <a href="mailto: sacglorychurch@hotmail.com">sacglorychurch@hotmail.com</a></p>
</footer>
</body>
  );
}

export default App;
