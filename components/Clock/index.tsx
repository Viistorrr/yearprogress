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
    <>
      {date.toLocaleTimeString()}
    </>
  );
};

export default Clock;
