const TOTAL_DAYS = 365;
const TOTAL_MONTHS = 12;
const TOTAL_HOURS = 24;

export default function Home() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const date = new Date().getDate();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  const YearPercent = (date / TOTAL_DAYS) * 100;
  const MonthPercent = (date / TOTAL_MONTHS) * 100;
  const DayPercent = (hours / TOTAL_HOURS) * 100;

  return (
    <main className="flex flex-col justify-center items-center p-10 min-h-screen">
      <div className="flex flex-col w-1/2 items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-700">
          {date}/{month + 1}/{year} - {hours} : {minutes}
        </h1>
        <div className="flex w-full items-center align-center">
          <h1 className="font-bold w-2/12 py-4">Año </h1>
          <div className="w-8/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-sky-900 h-4 rounded-full"
              style={{ width: YearPercent.toString() + "%" }}
            ></div>
          </div>
          <h1 className="font-bold w-2/12 px-4">{YearPercent.toFixed(2)} % </h1>
        </div>
        <div className="flex w-full items-center align-center">
          <h1 className="font-bold w-2/12 py-4">Mes </h1>
          <div className="w-8/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-sky-700 h-4 rounded-full"
              style={{ width: MonthPercent.toString() + "%" }}
            ></div>
          </div>
          <h1 className="font-bold w-2/12 px-4">
            {MonthPercent.toFixed(2)} %{" "}
          </h1>
        </div>
        <div className="flex w-full items-center align-center">
          <h1 className="font-bold w-2/12 py-4">Día </h1>
          <div className="w-8/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-sky-500 h-4 rounded-full"
              style={{ width: DayPercent.toString() + "%" }}
            ></div>
          </div>
          <h1 className="font-bold w-2/12 px-4">{DayPercent.toFixed(2)} % </h1>
        </div>
      </div>
      <div>
        <p className="text-sm text-slate-700">
          Hecho por{" "}
          <a
            className="text-sky-900 hover:text-sky-700"
            href="https://twitter.com/viistorrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>@viistorrr</b>
          </a>
        </p>
      </div>
      <div>
        <p className="text-sm text-slate-700 py-4">
          <a
            className="text-sky-900 hover:text-sky-700"
            href="https://www.viistorrr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.viistorrr.com
          </a>
        </p>
      </div>
    </main>
  );
}
