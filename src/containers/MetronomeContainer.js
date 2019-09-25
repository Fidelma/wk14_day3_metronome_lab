import React, {Component} from 'react';
import Interval from '../components/Interval';

class MetronomeContainer extends Component {

  constructor(props) {
    super(props) ;
    this.state = {
      bpm: null
    }

  


  }

  render() {
    return(
      <Interval/>

    )
  }


}

export default MetronomeContainer;
