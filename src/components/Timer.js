import React, { useState } from "react";

const Timer = () => {
  const [mins, setMins] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const starting = 10;
  let time = starting * 60;

  const updateCountdown = () => {
    const mins = Math.floor(time / 60);

    let secs = time % 60;

    secs = secs < 10 ? "0" + secs : secs;

    time--;

    setMins(mins);
    setSeconds(secs);
  };
  setInterval(updateCountdown, 1000);

  return (
    <div>
      <p>
        {mins} : {seconds}
      </p>
    </div>
  );
};

export default Timer;
