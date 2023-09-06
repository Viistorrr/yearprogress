'use client'
import {
  weekDays,
  TOTAL_WEEK_DAYS
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

export const WeekInfo = () => {
  let date = new Date()
  const dayOfWeek = weekDays[date.getDay()];
  let dayOfWeekd = date.getDay()
  if(dayOfWeekd == 0) dayOfWeekd = 7
  const currentWeekPercent = (dayOfWeekd / TOTAL_WEEK_DAYS) * 100;
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  let  weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay()) / 7);
  if(dayOfWeekd == 7) weekNumber = weekNumber - 1

  return (
   <div className="flex flex-col w-full h-min items-center align-center justify-center border-2 rounded-lg border-slate-300 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
      <h1 className="font-bold py-8">
        {weekNumber} Semanas
      </h1>
      <div className="flex flex-row w-full items-center align-center">
        <div className="flex items-center w-full bg-slate-100 rounded-lg h-2">
          <div
              className={`flex items-center justify-center py-4 ${getColor(currentWeekPercent)} h-2`}
            style={{
              width: currentWeekPercent.toString() + "%"
            }}
          >
            <span className="text-sm font-bold pr-4">
              {dayOfWeek}
            </span>
          </div>
        </div>
        <h1 className="w-1/12 pl-2 pr-8 font-bold items-center text-sm text-sky-900">
          {currentWeekPercent.toFixed(0)}%
        </h1>
      </div>
    </div>
  );
};