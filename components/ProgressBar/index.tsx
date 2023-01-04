const ProgressBar = ({ number, percent, bgColor }: any) => {
  return (
    <div className="flex flex-col w-full items-center align-center">
      <div>
        <h1 className="font-bold w-full py-4">Día {number} de 365</h1>
      </div>
      <div className="flex items-center w-full bg-gray-300 rounded-full h-4 dark:bg-gray-700">
        <div
          className={`flex items-center justify-center py-2 ${bgColor} h-4 rounded-full`}
          style={{ width: percent.toString() + "%" }}
        ></div>
        <h1 className="font-bold items-center text-sm text-sky-900">
          {" "}
          {percent.toFixed(1)} %{" "}
        </h1>
      </div>
    </div>
  );
};

export default ProgressBar;
