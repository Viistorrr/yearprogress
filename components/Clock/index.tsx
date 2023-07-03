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
    <h3 className="text-2xl font-bold text-slate-700 pt-2">
      {date.toLocaleTimeString().toUpperCase()}
    </h3>
  );
};

export default Clock;
