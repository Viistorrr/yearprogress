'use client'
import { getCurrentYear } from "@utils/constants";


export const YearInfo = ({currentYear, yearPercent, dayOfYear, color}:any) => {
  const date = new Date
  return (
   <>
      <h1 className="text-lg font-bold text-slate-700 py-2">
        {currentYear}
      </h1>
      <div className="flex flex-row w-full items-center align-center">
        <div className="flex items-center w-full bg-slate-100 rounded-lg h-4">
          <div
            className={`flex items-center justify-end py-2 ${color} h-2 rounded-lg`}
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
