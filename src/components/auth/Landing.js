import React, { Component } from 'react';
import { FullsizePicture } from 'react-responsive-picture';
import splash from '../../assets/images/allin-premier-splash-1920w.png'; // with import

export default class Landing extends Component {
  render() {
    return (
      <div style={{ height: '105vh' }}>
        <FullsizePicture src={splash} />
      </div>
    );
  }
}
