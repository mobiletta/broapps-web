import React, { Fragment } from 'react';
import SelectedBets from './SelectedBets';
import './BetSlips.css';

export default function BetSlips() {
  return (
    <Fragment>
      <main className="main">
        <SelectedBets />
      </main>
    </Fragment>
  );
}
