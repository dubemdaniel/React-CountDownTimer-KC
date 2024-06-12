import React, { useState, useEffect } from 'react';
import './App.css';
import TimerControls from './components/TimerControls';
import TimerDisplay from './components/TimerDisplay';
import TimerInputs from './components/TimerInputs';

function App() {
  const [timeInput, setTimeInput] = useState('');
  const [countdownTime, setCountdownTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (timerRunning && !timerPaused) {
      const intervalId = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime === 0) {
            clearInterval(intervalId);
            setTimerRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timerRunning, timerPaused]);

  const handleStart = () => {
    if (timeInput == '') {
      setErrorMessage('Timer input can not be empty')
        return 
    }
    setErrorMessage('')
    if (!timerRunning) {
      setCountdownTime(parseInt(timeInput));
      setRemainingTime(parseInt(timeInput));
      setTimerRunning(true);
      setTimerPaused(false);
    }
  };

  const handlePause = () => {
    setTimerPaused(!timerPaused);
  };

  const handleReset = () => {
    setTimerRunning(false);
    setTimerPaused(false);
    setRemainingTime(0);
  };

  const handleChange = (e) => {
    setTimeInput(e.target.value);
  };

  return (
    <div className="count-timer">
      <div className="countdown">
        <h1 className='header'>Countdown Timer</h1>
        <TimerInputs value={timeInput} onChange={handleChange} />
        {errorMessage && <p className='error'>{errorMessage}</p>}
        <div className=' timer'>
        <TimerDisplay remainingTime={remainingTime} />
        <TimerControls
          timerRunning={timerRunning}
          timerPaused={timerPaused}
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
        />
       </div>
      </div>
    </div>
  );
}

export default App
