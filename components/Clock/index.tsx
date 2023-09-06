"use client";
import { useState, useEffect } from "react";

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  const options = { timeZone: 'America/Bogota',  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const day = date.getDate();
  const month = (date.getMonth() + 1);
  const year = date.getFullYear().toString();
  let formattedDate = formatter.format(date);
  formattedDate = `${day}/${month}/${year}`;

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
      <iframe src="https://giphy.com/embed/7Z8QOXkz3USMDb9NZH" width="60" height="80" className="giphy-embed rounded-lg mb-4" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/poop-toilet-poo-7Z8QOXkz3USMDb9NZH"></a></p>
      <h2 className="flex justify-center text-2xl font-bold text-slate-600 mt-4">
          {formattedDate}
        </h2>
      <h3 className="text-xs font-bold text-slate-700 pt-2 justify-center">
        {date.toLocaleTimeString()}
      </h3>
    </div>
  );
};

export default Clock;
