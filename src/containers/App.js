import React, { Component } from 'react';
import Header from '../components/Header';
import songs from '../data/songs';
import KaraokeContainer from './KaraokeContainer';

class App extends Component {
  state = {
    songs: songs,
    toDisplay: '',
    input: ''
  }

  componentDidMount() {
  fetch("http://localhost:4000")
    .then(res => res.json())
    .then(
      (res) => {
        this.setState({
          songs: res
        });
      }
    )
  }

  clickPlay = (e)=>{
    let songToDispaly = this.state.songs.find(song=>{
      return song.id == e.target.id
    })
    this.setState({
      toDisplay: songToDispaly
    })
  }

  onInput = (e)=>{
    let value = e.target.value
    this.setState({ input: value})
  }

  filterSongs = () => {
    if (this.state.input.length > 0){
      let filteredSongs = this.state.songs.filter(song=>{
        return song.title.toLowerCase().includes(this.state.input);
      })
      return filteredSongs
    }else{
      return this.state.songs
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <KaraokeContainer
          songs={this.filterSongs()}
          clickPlay={this.clickPlay}
          toDisplay={this.state.toDisplay}
          onInput={this.onInput}
          input={this.state.input}/>
      </div>
    );
  }
}

export default App;
