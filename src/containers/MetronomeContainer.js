import React, {Component} from 'react';
import Interval from '../components/Interval';
import PlayStop from '../components/PlayStop';

class MetronomeContainer extends Component {

  constructor(props) {
    super(props) ;
    this.state = {
      bpm: 60,
      playing: false,
      timerID: null

    }
    this.setBPM = this.setBPM.bind(this);
    this.startPlaying = this.startPlaying.bind(this);
    this.togglePlay = this.togglePlay.bind(this);

  }



    setBPM(bpm) {
      this.setState({bpm: bpm})
    }

    togglePlay(){
      this.state.playing ? this.stopPlaying() : this.startPlaying()
    }

    startPlaying(){
      const audio = new Audio('./swish.wav');
      // audio.src = './MetronomeSound.m4a'
      audio.play()
      const delay = 60000/this.state.bpm;
      const timerID = setTimeout(this.startPlaying, delay);
      this.setState({playing: true, timerID})

    }

    stopPlaying(){
      this.setState({playing: false});
      clearTimeout(this.state.timerID);

    }

    // setPlaying(audio) {
    //   this.state.playing ? this.setState({playing: false}): this.setState({playing: true});
    //   if(this.state.playing) {
    //     // const timer = setTimeout(audio.play(),6000/this.state.bpm)
    //   }
    //   audio.paused ? audio.play() : audio.pause();
    //   window.setInterval(audio.play(), (60 / this.state.bpm * 1000));
    //   audio.classList.toggle('playing');
    //
    // }
    // playMetronome() {
    //   var intervalID = setInterval(this.setPlaying, ((60 / this.state.bpm) * 1000));
    //
    // }





  render() {
    return(
      <div>
      <Interval setBPM={this.setBPM}/>
      <PlayStop togglePlay={this.togglePlay}/>
      </div>

    )
  }


}

export default MetronomeContainer;
