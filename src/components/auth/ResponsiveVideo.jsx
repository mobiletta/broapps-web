import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import styles from './ResponsiveVideo.module.scss'

export default class ResponsiveVideo extends Component {
    render() {
      return (
        <div className={styles.reactPlayerWrapper}}>
          <ReactPlayer
            url="https://bro-media.s3.amazonaws.com/static-video/intro-assets-adjust-1920-c.mp4"
            className={styles.reactPlayer}
            playing
            loop
            width="100%"
            height="100%"
          />
        </div>
      );
    }
  }