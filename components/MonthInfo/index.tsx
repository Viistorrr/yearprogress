'use client'

const MonthInfo = ({month, formattedDate, months, color, currentMonthPercent}:any) => {
  return (
   <>
      <h1 className="font-bold py-4 text-slate-700">
        {month} Meses
        </h1>
        <div className="flex flex-row w-full items-center align-center">
          <div className="flex items-center w-full bg-slate-100 rounded-full h-4">
            <div
              className={`flex items-center justify-end py-2 ${color} h-4 rounded-full`}
              style={{
                width: {currentMonthPercent}.toString() + "%",
              }}
            >
              <span className="text-sm font-bold pr-4">
                {formattedDate.substring(0,2)} de {months[month].name}
              </span>
            </div>
          </div>
          <h1 className="w-1/12 pl-2 pr-8 font-bold items-center text-sm text-sky-900">
          {currentMonthPercent.toFixed(0)}%
          </h1>
        </div>
   </>
  );
};

export default MonthInfo;
