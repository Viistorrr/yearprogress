/* export const API_TIME_URL =
  "https://world-time2.p.rapidapi.com/timezone/America/Bogota";

export const API_OPTIONS_URL: any = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "world-time2.p.rapidapi.com",
  },
  cache: "no-store" as RequestCache,
}; */

export const weekDays: any = {
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
  7: "Domingo",
};

export const dayOfYear: any = () =>{
  const year:any = new Date().getFullYear();
  const start = new Date(year, 0, 0);
  const diff = new Date().getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);

  return day;
}

export const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
};

export const months: any = {
  1: { name: "Enero", days: 31 },
  2: { name: "Febrero", days: getCurrentYear() % 4 === 0 ? 29 : 28 },
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

export const getMonthPercent = (month: number, date: number) => {
  const monthDays = months[month].days;
  const monthPercent = (date / monthDays) * 100;
  return monthPercent;
};

export const TOTAL_DAYS = 365;
export const TOTAL_WEEK_DAYS = 7;
export const TOTAL_WEEKS = 52;
export const TOTAL_MONTHS = 12;
export const TOTAL_HOURS = 12;
