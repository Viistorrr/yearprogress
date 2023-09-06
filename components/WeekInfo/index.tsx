export const WeekInfo = ({weekNumber, currentWeekPercent, dayOfWeek, color}:any) => {
  return (
   <>
      <h1 className="font-bold py-8">
        {weekNumber} Semanas
      </h1>
      <div className="flex flex-row w-full items-center align-center">
        <div className="flex items-center w-full bg-slate-100 rounded-lg h-2">
          <div
              className={`flex items-center justify-end py-4 ${color} h-2 rounded-lg`}
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
   </>
  );
};

export default WeekInfo;
