import React, { Component } from 'react';
import { Player } from 'video-react';

export default class TrailerPlayer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      playerSource: 'https://bro-media.s3.amazonaws.com/static-video/01236225d7b06eb8b6f6153df973ba5f.mp4',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playerSource !== prevState.playerSource) {
      this.player.load();
    }
  }

  handleValueChange(e) {
    const { value } = e.target;
    this.setState({
      inputVideoUrl: value,
    });
  }

  updatePlayerInfo() {
    const { inputVideoUrl } = this.state;
    this.setState({
      playerSource: inputVideoUrl,
    });
  }

  render() {
    return (
      <div>
        <Player
          ref={player => {
            this.player = player;
          }}
          videoId="video-1"
        >
          <source src={this.state.playerSource} />
        </Player>
      </div>
    );
  }
}
