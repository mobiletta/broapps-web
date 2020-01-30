import React, { Component } from 'react';
import poster from '../../assets/images/intro-assets-adjust-1920-poster.png'
import styles from './ResponsiveVideo.module.scss';

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

export default class ResponsiveVideo extends Component {
  render() {
    return (
      <div className={styles.pushToBottom}>
        <Video autoPlay loop
            controls={['Volume','Fullscreen']}
            poster={poster}>
            <source src='https://bro-media.s3.amazonaws.com/static-video/intro-assets-adjust-1920-c.mp4' type='video/mp4' />
        </Video>
      </div>
    );
  }
}
