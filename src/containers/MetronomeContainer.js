import React, {Component} from 'react';
import Interval from '../components/Interval';
import PlayStop from '../components/PlayStop';

class MetronomeContainer extends Component {

  constructor(props) {
    super(props) ;
    this.state = {
      bpm: null,
      playing: false
    }
    this.setBPM = this.setBPM.bind(this);
    this.setPlaying = this.setPlaying.bind(this);

  }



    setBPM(bpm) {
      this.setState({bpm: bpm})
    }

    setPlaying(audio) {
      this.state.playing ? this.setState({playing: false}): this.setState({playing: true});
      while(this.state.playing) {
        audio.play()
      }
      // audio.paused ? audio.play() : audio.pause();
      // window.setInterval(audio.play(), (60 / this.state.bpm * 1000));
      // audio.classList.toggle('playing');

    }
    playMetronome() {
      var intervalID = setInterval(this.setPlaying, ((60 / this.state.bpm) * 1000));

    }





  render() {
    return(
      <>
      <Interval setBPM={this.setBPM}/>
      <PlayStop setPlaying={this.setPlaying}/>
      </>

    )
  }


}

export default MetronomeContainer;
