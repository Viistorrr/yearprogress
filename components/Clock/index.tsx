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
    <div className="flex items-center md:flex-col">
      <div className="pl-2">
        <h3 className="text-sm font-bold text-slate-700 pt-2">
          {date.toLocaleTimeString().toUpperCase()}
        </h3>
        <span className="text-sm font-bold text-slate-700 pt-2">Hora Colombia</span>
      </div>
      <iframe src="https://giphy.com/embed/3o7btQVgcavX2Ouaje" width="100" height="100" className="giphy-embed pl-4" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/animation-art-happy-3o7btQVgcavX2Ouaje"></a></p>
    </div>
  );
};

export default Clock;
