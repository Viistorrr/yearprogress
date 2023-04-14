export const weekDays: any = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

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
