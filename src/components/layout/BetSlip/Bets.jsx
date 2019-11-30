import React, { useState } from "react";
import Bet from './Bet';
import './Bets.css';

export default function Bets() {
    const startingteams = [];
    for (let i = 0; i < 5; i++) {
      startingteams[i] = superb.random();
    }
    const [teams] = useState(startingteams);
  
    return (
      <div className="boxes">
        {teams.map(team => (
          <Bet key={team} team={team} />
        ))}
      </div>
    );
  }
  