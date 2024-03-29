import React, { useState } from 'react';
import superb from 'superb';
import AnimatedVisibility from './AnimatedVisibility';
import './Boxes.module.css';

const colors = ['#6690FF', '#6CD566', '#50E5FF', '#FFDC75', '#FF7C83', '#FF702D', '#FFAA42', '#7F7B82', '#4D7EA8'];

function Box({ team }) {
  const [color] = useState(colors[Math.floor(Math.random() * 9)]);
  const [visible, setVisible] = useState(true);
  const [condition, setCondition] = useState(false);

  let style = { borderColor: color, backgroundColor: color };

  function hideMe() {
    setVisible(false);
  }

  const handleClick = event => {
    setCondition(!condition);
    event.preventDefault();
  };

  return (
    <AnimatedVisibility visible={visible} animationIn="zoomIn" animationOut="zoomOut">
      <div className={`row dashboard-cards ${condition ? ' showing' : ''}`} onClick={handleClick}>
        <div className="card col-md-4">
          <div className="card-title">
            <h2>
              Baltimore Ravens vs Los Angeles Rams
              <small>Moneyline Favorite</small>
            </h2>
            <div className="task-count">$100</div>
          </div>
          <div className={`card-flap flap1 ${condition ? ' d-card-show' : ''}`} onClick={handleClick}>
            <div className="card-description">
              <ul className="task-list">
                <li>
                  Time Remaining
                  <span>2QTR 3:03</span>
                </li>
                <li>
                  Current Odds
                  <span>+115</span>
                </li>
                <li>
                  To Win
                  <span>$115</span>
                </li>
                <li>
                  To Collect
                  <span>$215</span>
                </li>
              </ul>
            </div>
            <div className="card-flap flap2">
              <div className="card-actions">
                <a className="btn" href="!#">
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedVisibility>
  );
}

export default function Boxes() {
  const startingteams = [];
  for (let i = 0; i < 5; i++) {
    startingteams[i] = superb.random();
  }
  const [teams] = useState(startingteams);

  return (
    <div className="boxes">
      {teams.map(team => (
        <Box key={team} team={team} />
      ))}
    </div>
  );
}
