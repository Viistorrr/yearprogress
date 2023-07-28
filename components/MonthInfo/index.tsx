'use client'
import { getMonthPercent } from "@utils/constants";
const getColor = (percent: number) => {
  if (percent <= 33.3333) {
    return "bg-rose-400";
  } else if (33.3333 < percent && percent <= 66.6666) {
    return "bg-amber-400";
  } else {
    return "bg-emerald-400";
  }
};

const MonthInfo = ({month, day, formattedDate, months}:any) => {
  const date = new Date
  return (
   <>
      <h1 className="font-bold py-4 text-slate-700">
        {month} Meses
        </h1>
        <div className="flex flex-row w-full items-center align-center">
          <div className="flex items-center w-11/12 bg-slate-100 rounded-full h-4">
            <div
              className={`flex items-center justify-end py-2 ${getColor(
                getMonthPercent(month, day)
              )} h-4 rounded-full`}
              style={{
                width: getMonthPercent(month, day).toString() + "%",
              }}
            >
              <span className="text-sm font-bold pr-4">
                {formattedDate.substring(0,2)} de {months[month].name}
              </span>
            </div>
          </div>
          <h1 className="w-1/12 pl-2 pr-8 font-bold items-center text-sm text-sky-900">
          {getMonthPercent(month, day).toFixed(0)}%
          </h1>
        </div>
   </>
  );
};

export default MonthInfo;
