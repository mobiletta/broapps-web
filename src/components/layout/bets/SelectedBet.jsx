import React, { useState } from 'react';
import AnimatedVisibility from '../../views/BetSlip/AnimatedVisibility';
import './SelectedBets.module.css';

export default function SelectedBet({ team }) {
  const [visible] = useState(true);
  const [condition, setCondition] = useState(false);

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
