import React from 'react';

const Song = (props) => {
  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button id={props.song.id} onClick={(e)=>props.clickPlay(e)}>Play</button></td>
    </tr>
  )
}

export default Song;
