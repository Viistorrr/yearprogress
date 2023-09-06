'use client'
import {
  months,
  getMonthPercent,
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

export const MonthInfo = () => {
  let date = new Date()
  const day = date.getDate();
  const month = (date.getMonth() + 1);
  let dayOfWeekd = date.getDay()
  if(dayOfWeekd == 0) dayOfWeekd = 7
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  let  weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay()) / 7);
  if(dayOfWeekd == 7) weekNumber = weekNumber - 1
  
  return (
    <div className="flex flex-col w-full h-min items-center align-center justify-center border-2 rounded-lg border-slate-300 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
      <h1 className="font-bold py-4 text-slate-700">
        {month} Meses
        </h1>
        <div className="flex flex-row w-full items-center align-center">
          <div className="flex items-center w-full bg-slate-100 rounded-lg h-4">
            <div
              className={`flex items-center justify-center py-4 ${getColor(getMonthPercent(month, day))}`}
              style={{
                width: getMonthPercent(month, day).toString() + "%",
              }}
            >
              <span className="text-sm font-bold pr-4">{day} de {months[month].name}</span>
            </div>
          </div>
          <h1 className="w-1/12 pl-2 pr-8 font-bold items-center text-sm text-sky-900">
          {getMonthPercent(month, day).toFixed(0)}%
          </h1>
          </div>
      </div>
  );
};
