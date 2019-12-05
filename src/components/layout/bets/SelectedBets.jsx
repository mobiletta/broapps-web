import React, { useState } from 'react';
import SelectedBet from './SelectedBet';
import superb from 'superb';
import './SelectedBets.module.css';
import './BetSlips.module.css';

export default function SelectedBets() {
  const startingteams = [];
  for (let i = 0; i < 5; i++) {
    startingteams[i] = superb.random();
  }
  const [teams] = useState(startingteams);

  return (
    <div className="boxes">
      {teams.map(team => (
        <SelectedBet key={team} team={team} />
      ))}
    </div>
  );
}
