'use client'
import { getCurrentYear } from "@utils/constants";
const getColor = (percent: number) => {
  if (percent <= 33.3333) {
    return "bg-rose-400";
  } else if (33.3333 < percent && percent <= 66.6666) {
    return "bg-amber-400";
  } else {
    return "bg-emerald-400";
  }
};

const YearInfo = ({yearPercent, dayOfYear}:any) => {
  const date = new Date
  return (
   <>
      <h1 className="text-lg font-bold text-slate-700 py-2">
        {getCurrentYear()}
      </h1>
      <div className="flex flex-row w-full items-center align-center">
        <div className="flex items-center w-full bg-slate-100 rounded-full h-4">
          <div
            className={`flex items-center justify-end py-2 ${getColor(
              yearPercent
            )} h-4 rounded-full`}
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
   </>
  );
};

export default YearInfo;
