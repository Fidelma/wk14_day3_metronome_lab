import React from 'react';

const Interval = (props) => {




  function getBPM(event) {
    props.setBPM(event.target.value);

  }

  return(
      <>
      <div>

      <input onChange={getBPM} type='range'default='60' id='interval' name='bpm' min='1' max='220'>
      </input>
      <label htmlFor='bpm'>BPM</label>
      </div>
      </>


    )

}

export default Interval;
