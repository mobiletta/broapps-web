import React, { Component } from 'react';
import ReactPlayer from 'react-player';
//import mp4url from '../../assets/video/intro-assets-adjust-1920-c.mp4';
//import webmurl from '../../assets/video/intro-assets-adjust-1920.webm';
//import posterurl from '../../assets/images/aeriallv-poster.png';
import '../../index.css';

class ResponsivePlayer extends React.Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          url="https://bro-media.s3.amazonaws.com/static-video/intro-assets-adjust-1920-c.mp4"
          className="react-player"
          playing
          loop
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

/* function ResponsiveImage( { src, width, height } ) {
  return (
    <div
      style={ { 
        width,
      } }
      className="responsive-image">
      <div style={ {
          paddingBottom: ( height / width * 100 ) + '%'
        } } />
        <VideoBg poster={poster}>
            <VideoBg.Source src={bgvideo} type="video/mp4" />
        </VideoBg>
      <img
        src={ src }
        className="responsive-image__image" />
    </div>
  );
} */

export default class Landing extends Component {
  render() {
    return <ResponsivePlayer />;
  }
}
