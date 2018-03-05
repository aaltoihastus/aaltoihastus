import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';





class App extends Component {
  componentDidMount = () => {
    let target_date = new Date("March 27, 2018"); // set the countdown date
    let days, hours, minutes, seconds; // letiables for time units

    let countdown = document.getElementById("tiles"); // get tag element

    getCountdown();

    setInterval(function () { getCountdown(); }, 1000);

    function getCountdown() {

      // find the amount of "seconds" between now and target
      let current_date = new Date().getTime();
      let seconds_left = (target_date - current_date) / 1000;

      days = pad(parseInt(seconds_left / 86400));
      seconds_left = seconds_left % 86400;

      hours = pad(parseInt(seconds_left / 3600));
      seconds_left = seconds_left % 3600;

      minutes = pad(parseInt(seconds_left / 60));
      seconds = pad(parseInt(seconds_left % 60));

      // format countdown string + set tag value
      countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
    }

    function pad(n) {
      return (n < 10 ? '0' : '') + n;
    }
  }

  render() {
    return (
      <div className="App">
        <div id="countdown">
          <div id='tiles'></div>
          <div class="labels">
            <li>Days</li>
            <li>Hours</li>
            <li>Mins</li>
            <li>Secs</li>
          </div>
        </div>
        <a href="https://www.facebook.com/"><p class="links"> Facebook </p></a>
        <a href="https://www.youtube.com/"><p class="links"> Mikä aaltoihastus? </p></a>
        <p id="club"> Club </p>
        <div id="aaltoihastus">
          <p > Aaltoihastus </p>
        </div>
        <p id="info"> 27.3 | DTM </p>

      </div>
    );
  }
}

export default App;
