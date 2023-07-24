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
      <iframe src="https://giphy.com/embed/7Z8QOXkz3USMDb9NZH" width="60" height="80" className="giphy-embed rounded-xl" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/poop-toilet-poo-7Z8QOXkz3USMDb9NZH"></a></p>
      <h3 className="text-xs font-bold text-slate-700 pt-2 justify-center">
        {date.toLocaleTimeString().toUpperCase()} Hora Colombia
      </h3>
    </div>
  );
};

export default Clock;
