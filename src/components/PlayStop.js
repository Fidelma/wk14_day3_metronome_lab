import React, {Component} from 'react';

class PlayStop extends Component {


render() {

return(
  <>
  <button onClick={this.props.togglePlay} type='button' name='playStop'>Play</button>
  </>
 )
 }
}

export default PlayStop;
