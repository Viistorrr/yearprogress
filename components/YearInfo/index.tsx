'use client'
import {
  TOTAL_DAYS,
  getCurrentYear
} from "@utils/constants";

const getColor = (percent: number) => {
  if (percent && percent <= 33.3333) {
    return "bg-rose-400";
  } else if (33.3333 < percent && percent <= 66.6666) {
    return "bg-amber-400";
  } else {
    return "bg-emerald-400";
  }
};

export const YearInfo = () => {
  const date = new Date
  const yearStart = new Date(date.getFullYear(), 0, 0);
  const diff = (date.getTime() - yearStart.getTime()) + ((yearStart.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const yearPercent = (dayOfYear / TOTAL_DAYS) * 100;
  return (
    <div className="flex flex-col h-min w-full items-center align-center justify-center border-2 rounded-lg border-slate-300 pt-2 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
      <h1 className="text-lg font-bold text-slate-700 py-2">
        {getCurrentYear()}
      </h1>
      <div className="flex flex-row w-full items-center align-center">
        <div className="flex items-center w-full bg-slate-100 rounded-lg h-4">
          <div
            className={`flex items-center justify-center py-2 ${getColor(yearPercent)} h-2`}
            style={{ width: yearPercent.toString() + "%" }}
          >
            <span className="text-sm font-bold pr-4">
              {dayOfYear} días
            </span>
          </div>
        </div>
        <h1 className="w-1/12 pl-2 pr-8 font-bold items-center text-sm text-sky-900">
        {yearPercent.toFixed(0)}%
        </h1>
      </div>
    </div>
  );
};
