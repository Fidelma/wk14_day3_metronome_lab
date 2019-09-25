import React from 'react';

const Interval = (props) => {




  function getBPM(event) {
    props.setBPM(event.target.value);

  }

  return(
      <>
      <div>

      <input onChange={getBPM} type='range' id='interval' name='bpm' min='0' max='220'>
      </input>
      <label htmlFor='bpm'>BPM</label>
      </div>
      </>


    )

}

export default Interval;
