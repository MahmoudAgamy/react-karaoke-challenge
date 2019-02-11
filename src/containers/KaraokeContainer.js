import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter onInput={this.props.onInput} input={this.props.input}/>
          <SongList songs={this.props.songs} clickPlay={this.props.clickPlay}/>
        </div>
        <KaraokeDisplay toDisplay={this.props.toDisplay}/>
      </div>
    );
  }
}

export default KaraokeContainer;
