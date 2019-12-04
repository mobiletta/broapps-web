import React from 'react';
import { Box } from 'grommet';
//import 'golden-layout/src/css/goldenlayout-base.css';
//import 'golden-layout/src/css/goldenlayout-translucent-theme.css';
import './Servers.module.scss';
import interact from 'interactjs';
import { SelectedBet } from '../components/layout/bets';
//import GoldenLayout, { Row, Stack, createGoldenLayoutComponent } from 'react-golden-layout';
//import { Foo, Bar } from '../components/views';

const position = { x: 0, y: 0 };

interact('.window').draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target);
    },
    move(event) {
      position.x += event.dx;
      position.y += event.dy;

      event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
    },
  },
});

export const Servers = () => (
  <Box fill align="center" justify="center">
    <div id="bod">
      <div class="window active-window" id="win">
        <div class="winbg">
          <h1>Odds Board</h1>
        </div>
        <div class="blur-shadow"></div>
      </div>

      <div class="window odds">
        <div class="winbg">
          <h1>Game Countdown</h1>
        </div>
        <div class="blur-shadow"></div>
      </div>

      <div class="window special-case">
        <div class="winbg">
          <h1>
            <SelectedBet />
          </h1>
        </div>
        <div class="blur-shadow"></div>
      </div>

      <div class="window room">
        <div class="winbg">
          <h1>Room</h1>
        </div>
        <div class="blur-shadow"></div>
      </div>
    </div>
  </Box>
);

export default Servers;
