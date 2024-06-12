import React  from 'react';

const TimerInput = ({ value, onChange }) => {
    return (
      <div>
        <input type="number" value={value} onChange={onChange} placeholder="Enter seconds" />
      </div>
    );
  }

  export default TimerInput;