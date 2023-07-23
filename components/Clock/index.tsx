"use client";
import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className="flex flex-col items-center">
      <iframe src="https://giphy.com/embed/tn8zWeNYA73G0" width="70" height="70" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/transparent-gallery-clock-tn8zWeNYA73G0"></a></p>
      <h3 className="text-xs font-bold text-slate-700 pt-2 justify-center">
        {date.toLocaleTimeString().toUpperCase()} Hora Colombia
      </h3>
    </div>
  );
};

export default Clock;
