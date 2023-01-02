import { LocalDateTime } from "local-date";

const TOTAL_DAYS = 365;
const TOTAL_WEEK_DAYS = 7;
const TOTAL_MONTHS = 12;
const TOTAL_HOURS = 24;

export default function Home() {
  const globalDate = new Date();

  const year = globalDate.getFullYear();
  const month = globalDate.getMonth();
  const date = globalDate.getDate();
  const hours = globalDate.getHours();
  const minutes = globalDate.getMinutes();
  const weekDay = globalDate.getDay();
  const localHours: any = hours.toLocaleString("es-ES");

  const YearPercent = (date / TOTAL_DAYS) * 100;
  const MonthPercent = (date / TOTAL_MONTHS) * 100;
  const DayPercent: any = (localHours / TOTAL_HOURS) * 100;
  const WeekPercent = (weekDay / TOTAL_WEEK_DAYS) * 100;

  var now: any = new Date();
  var start: any = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);

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
          <div className="flex items-center w-8/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className="flex items-center justify-center py-2 bg-sky-900 h-4 rounded-full"
              style={{ width: DayPercent.toString() + "%" }}
            ></div>
            <h1 className="font-bold items-center text-sm text-sky-900">
              {DayPercent.toFixed(2)} %{" "}
            </h1>
          </div>
        </div>
        <div className="flex w-full items-center align-center">
          <h1 className="font-bold w-2/12 py-4">Semana </h1>
          <div className="flex items-center align-center w-8/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className="flex items-center justify-center py-2 bg-sky-700 h-4 rounded-full"
              style={{ width: WeekPercent.toString() + "%" }}
            ></div>
            <h1 className="font-bold items-center text-sm text-sky-900">
              {WeekPercent.toFixed(2)} %{" "}
            </h1>
          </div>
        </div>
        <div className="flex w-full items-center align-center">
          <h1 className="font-bold w-2/12 py-4">Mes </h1>
          <div className="flex items-center align-center w-8/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className="flex items-center justify-center py-2 bg-sky-500 h-4 rounded-full"
              style={{ width: MonthPercent.toString() + "%" }}
            ></div>
            <h1 className="font-bold items-center text-sm text-sky-900">
              {MonthPercent.toFixed(2)} %{" "}
            </h1>
          </div>
        </div>

        <div className="flex w-full items-center align-center">
          <h1 className="font-bold w-2/12 py-4">Año </h1>
          <div className="flex items-center align-center w-8/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className="flex items-center justify-center py-2 bg-sky-500 h-4 rounded-full"
              style={{ width: YearPercent.toString() + "%" }}
            ></div>
            <h1 className="font-bold text-sm text-sky-900">
              {YearPercent.toFixed(2)} %{" "}
            </h1>
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
