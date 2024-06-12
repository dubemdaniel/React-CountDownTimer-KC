import React from "react";
import '../App.css'

const TimerControls = ({timerRunning, onStart, onPause, onReset}) => {
  return (
    <div className="countdown-control">
      <button onClick={onStart} disabled={timerRunning}>
        Start
      </button>
      <button onClick={onPause} disabled={!timerRunning}>
        Pause
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default TimerControls;
