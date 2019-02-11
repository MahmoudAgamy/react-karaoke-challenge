import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      <h2>props.toDisplay.title</h2>
      <Lyrics lyrics={props.toDisplay.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
