import React, { Component } from 'react';
import { FullsizePicture } from 'react-responsive-picture';
import VideoBg from 'reactjs-videobg';
import splash from '../../assets/images/allin-premier-splash-1920w.png'; // with import
import bgvideo from '../../assets/video/broleans-app-intro.mp4';
import poster from '../../assets/images/aeriallv-poster.png';

export default class Landing extends Component {
  render() {
    return (
      <div style={{ height: '105vh' }}>
        <VideoBg poster={poster}>
          <VideoBg.Source src={bgvideo} type="video/mp4" />
        </VideoBg>
        <FullsizePicture src={splash} />
      </div>
    );
  }
}
