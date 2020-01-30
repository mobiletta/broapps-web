import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import styles from './ResponsiveVideo.module.scss';
//import url from '../../assets/video/intro-assets-adjust-1920.webm'

export default class ResponsiveVideo extends Component {
  render() {
    return (
      <div className={styles.responsiveVideoWrapper}>
        <ReactPlayer
          url="https://bro-media.s3.amazonaws.com/static-video/intro-assets-adjust-1920.webm"
          className={styles.responsiveVideo}
          playing
          loop
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}
