import { LocalDateTime } from "local-date";

const TOTAL_DAYS = 365;
const TOTAL_WEEK_DAYS = 7;
const TOTAL_MONTHS = 12;
const TOTAL_HOURS = 24;

export default function Home() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const date = new Date().getDate();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const weekDay = new Date().getDay();

  const YearPercent = (date / TOTAL_DAYS) * 100;
  const MonthPercent = (date / TOTAL_MONTHS) * 100;
  const DayPercent = (hours / TOTAL_HOURS) * 100;
  const WeekPercent = (weekDay / TOTAL_WEEK_DAYS) * 100;

  var now: any = new Date();
  var start: any = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);

  console.log();

  return (
    <main className="flex flex-col justify-start items-center p-10 min-h-screen">
      <div className="flex flex-col w-full lg:w-1/2 items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-700 p-16">
          Día {day} de {TOTAL_DAYS}
        </h1>
        <h1 className="text-3xl font-bold text-slate-700">
          {date}/{month + 1}/{year} - {hours} : {minutes}
        </h1>
        <div className="flex w-full items-center align-center">
          <h1 className="font-bold w-2/12 py-4">Día </h1>
          <div className="w-8/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className="flex items-center justify-center py-2 bg-sky-900 h-4 rounded-full"
              style={{ width: DayPercent.toString() + "%" }}
            >
              <h1 className="font-bold items-center text-sm text-white">
                {DayPercent.toFixed(2)} %{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center align-center">
          <h1 className="font-bold w-2/12 py-4">Semana </h1>
          <div className="w-8/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className="flex items-center justify-center py-2 bg-sky-700 h-4 rounded-full"
              style={{ width: WeekPercent.toString() + "%" }}
            >
              <h1 className="font-bold items-center text-sm text-white">
                {WeekPercent.toFixed(2)} %{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center align-center">
          <h1 className="font-bold w-2/12 py-4">Mes </h1>
          <div className="w-8/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className="flex items-center justify-center py-2 bg-sky-500 h-4 rounded-full"
              style={{ width: MonthPercent.toString() + "%" }}
            >
              <h1 className="font-bold items-center text-sm text-white">
                {MonthPercent.toFixed(2)} %{" "}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center align-center">
          <h1 className="font-bold w-2/12 py-4">Año </h1>
          <div className="w-8/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className="flex items-center justify-center py-2 bg-sky-500 h-4 rounded-full"
              style={{ width: YearPercent.toString() + "%" }}
            >
              <h1 className="font-bold text-sm text-sky-900">
                {YearPercent.toFixed(2)} %{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-slate-700">
          Hecho por{" "}
          <a
            className="text-sky-900 hover:text-sky-700 py-4"
            href="https://twitter.com/viistorrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>@viistorrr</i>
          </a>
        </p>
      </div>
      <div>
        <p className="text-sm text-slate-700 py-4">
          <a
            className="text-sky-900 hover:text-sky-700"
            href="https://www.buymeacoffee.com/viistorrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy me a coffee ☕{" "}
          </a>
        </p>
      </div>
      <div>
        <p className="text-sm text-slate-700">
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
