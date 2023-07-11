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
      <iframe src="https://giphy.com/embed/tn8zWeNYA73G0" width="80" height="80" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/transparent-gallery-clock-tn8zWeNYA73G0"></a></p>
      <div className="pl-2">
      <h3 className="text-2xl font-bold text-slate-700 pt-2">
        {date.toLocaleTimeString().toUpperCase()}
      </h3>
      <span className="text-2xl font-bold text-slate-700 pt-2">Hora Colombia</span>
      </div>
      
    </div>
  );
};

export default Clock;
