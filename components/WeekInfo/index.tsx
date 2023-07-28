const getColor = (percent: number) => {
  if (percent && percent <= 33.3333) {
    return "bg-rose-400";
  } else if (33.3333 < percent && percent <= 66.6666) {
    return "bg-amber-400";
  } else {
    return "bg-emerald-400";
  }
};

const WeekInfo = ({weekNumber, currentWeekPercent, dayOfWeek}:any) => {
  return (
   <>
      <h1 className="font-bold py-4">
        {weekNumber} Semanas
      </h1>
      <div className="flex flex-row w-full items-center align-center">
        <div className="flex items-center w-11/12 bg-slate-100 rounded-full h-4">
          <div
              className={`flex items-center justify-end py-2 ${getColor(
                currentWeekPercent
              )} h-4 rounded-full`}
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
