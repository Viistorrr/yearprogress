const setColor = (percent: number) => {
  if (percent <= 33.3333) {
    return "bg-rose-400";
  } else if (33.3333 < percent && percent <= 66.6666) {
    return "bg-amber-400";
  } else {
    return "bg-emerald-400";
  }
};

const ProgressBar = ({ number, total, percent }: any) => {
  return (
    <div className="flex flex-col w-full items-center align-center justify-center">
      <h1 className="font-bold py-4">
        Día {number} de {total}
      </h1>
      <div className="flex flex-row w-full items-center align-center ">
        <div className="flex items-center w-11/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
          <div
            className={`flex items-center justify-center py-2 ${setColor(
              percent
            )} h-4 rounded-full`}
            style={{ width: percent.toString() + "%" }}
          ></div>
        </div>
        <h1 className="w-1/12 pl-2 font-bold items-center text-sm text-sky-900">
          {percent.toFixed(1)} %{" "}
        </h1>
      </div>
    </div>
  );
};

export default ProgressBar;
