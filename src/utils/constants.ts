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

export const TOTAL_DAYS = 365;
export const TOTAL_WEEK_DAYS = 7;
export const TOTAL_WEEKS = 52;
export const TOTAL_MONTHS = 12;
export const TOTAL_HOURS = 24;
