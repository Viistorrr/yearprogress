export const API_TIME_URL =
  "https://world-time2.p.rapidapi.com/timezone/America/Bogota";

export const API_OPTIONS_URL = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "09e1613e52msh046fac448c79824p1e7e9djsn2c7cfc786b66",
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
