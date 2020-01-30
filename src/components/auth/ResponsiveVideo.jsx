import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import styles from './ResponsiveVideo.module.scss';
import url from '../../assets/video/intro-assets-adjust-1920-c.mp4';

export default class ResponsiveVideo extends Component {
  render() {
    return (
      <div className={styles.responsiveVideoWrapper}>
        <ReactPlayer url={url} className={styles.responsiveVideo} playing loop width="100%" height="100%" />
      </div>
    );
  }
}
