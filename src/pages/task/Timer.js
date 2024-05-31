import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from "./TaskContext";

function Timer({ startTime }) {
  const { getLastRunningTask } = useContext(TaskContext);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(Date.now() - getLastRunningTask().startTime);
    }, 1000);

    return () => clearInterval(intervalId); // Clear interval on unmount
    // eslint-disable-next-line
  }, []);

  // Format elapsed time into hours, minutes, seconds
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);

  return (
    <b>
      {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </b>
  );
}

export default Timer;