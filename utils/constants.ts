export const API_TIME_URL =
  "https://world-time2.p.rapidapi.com/timezone/America/Bogota";

export const API_OPTIONS_URL: any = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "world-time2.p.rapidapi.com",
  },
  cache: "no-store" as RequestCache,
};

export const weekDays: any = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
};

export const months: any = {
  1: { name: "Enero", days: 31 },
  2: { name: "Febrero", days: 2023 % 4 === 0 ? 29 : 28 },
  3: { name: "Marzo", days: 31 },
  4: { name: "Abril", days: 30 },
  5: { name: "Mayo", days: 31 },
  6: { name: "Junio", days: 30 },
  7: { name: "Julio", days: 31 },
  8: { name: "Agosto", days: 31 },
  9: { name: "Septiembre", days: 30 },
  10: { name: "Octubre", days: 31 },
  11: { name: "Noviembre", days: 30 },
  12: { name: "Diciembre", days: 31 },
};

export const getColor = (percent: number) => {
  if (percent <= 33.3333) {
    return "bg-rose-400";
  } else if (33.3333 < percent && percent <= 66.6666) {
    return "bg-amber-400";
  } else {
    return "bg-emerald-400";
  }
};

export const getMonthPercent = (month: number, date: any) => {
  const monthDays = months[month].days;
  const monthPercent = (date / monthDays) * 100;
  return monthPercent;
};

export const TOTAL_DAYS = 365;
export const TOTAL_WEEK_DAYS = 7;
export const TOTAL_WEEKS = 52;
export const TOTAL_MONTHS = 12;
export const TOTAL_HOURS = 12;
