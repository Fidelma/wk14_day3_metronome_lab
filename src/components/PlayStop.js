import React, {Component} from 'react';

class PlayStop extends Component {


render() {

return(
  <>
  <button onClick={() => {this.props.setPlaying(this.audio)}} type='button' name='playStop'>Play</button>
  <audio
  ref={(audio) => this.audio = audio}
  src='./MetronomeSound.m4a'/>
  </>
)

}
}

export default PlayStop;
