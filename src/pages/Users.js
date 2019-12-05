import React from 'react';
import { Box } from 'grommet';
//import 'golden-layout/src/css/goldenlayout-base.css';
//import 'golden-layout/src/css/goldenlayout-translucent-theme.css';
import styles from './Users.module.scss';
import interact from 'interactjs';
//import { SelectedBet } from '../components/layout/bets';
//import Boxes from '../components/views/BetSlip/Boxes';
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

export const Users = () => (
  <Box fill align="center" justify="center">
    <div className={styles.bod}>
      <div className={`${styles.window} ${styles.activewindow}`} id="win">
        <div className={styles.winbg}>
          <h1>Odds Board</h1>
        </div>
        <div className={styles.blurshadow}></div>
      </div>

      <div className={`${styles.window} ${styles.odds}`}>
        <div className={styles.winbg}>
          <h1>Game Countdown</h1>
        </div>
        <div className={styles.blurshadow}></div>
      </div>

      <div className={`${styles.window} ${styles.specialcase}`}>
        <div className={styles.winbg}>
          <h1>Bets</h1>
        </div>
        <div className={styles.blurshadow}></div>
      </div>

      <div className={`${styles.window} ${styles.room}`}>
        <div className={styles.winbg}>
          <h1>Room</h1>
        </div>
        <div className={styles.blurshadow}></div>
      </div>
    </div>
  </Box>
);

export default Users;
