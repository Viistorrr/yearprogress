const TOTAL_DAYS = 365;
const TOTAL_WEEK_DAYS = 7;
const TOTAL_WEEKS = 52;
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
  const YearPercentMiss = 100 - YearPercent;
  const MonthPercent = (date / TOTAL_MONTHS) * 100;
  const MonthPercentMiss = 100 - MonthPercent;
  const DayPercent: any = (localHours / TOTAL_HOURS) * 100;
  const DayPercentMiss: any = 100 - DayPercent;
  const WeekPercent = (weekDay / TOTAL_WEEK_DAYS) * 100;
  const WeekPercentMiss = 100 - WeekPercent;

  const week = Math.ceil((date + 1) / 7);

  var now: any = new Date();
  var start: any = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);

  return (
    <main className="flex flex-col justify-center items-center p-10 min-h-screen">
      <h1 className="text-6xl font-bold text-slate-700 items-center justify-center">
        ¿Qué día del año es hoy?
      </h1>
      <span className="text-base py-2 italic">Ey, gracias por entrar</span>😁✌🏾
      <div className="flex flex-col w-full lg:w-1/2 items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-700 py-8">
          {date}/{month + 1}/{year} - {hours} : {minutes}
        </h1>

        <div className="flex flex-col w-full items-center align-center">
          <div>
            <h1 className="font-bold w-full py-4">
              Día {day} de {TOTAL_DAYS}
            </h1>
          </div>
          <div className="flex items-center w-full bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className={`flex items-center justify-center py-2 ${
                DayPercentMiss > 50 ? "bg-emerald-400" : "bg-rose-400"
              } h-4 rounded-full`}
              style={{ width: DayPercentMiss.toString() + "%" }}
            ></div>
            <h1 className="font-bold items-center text-sm text-sky-900">
              {DayPercentMiss.toFixed(2)} %{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-full items-center align-center">
          <div>
            <h1 className="font-bold w-full py-4">
              Semana {week} de {TOTAL_WEEKS}
            </h1>
          </div>
          <div className="flex items-center align-center w-full bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className={`flex items-center justify-center py-2 ${
                WeekPercentMiss > 50 ? "bg-emerald-400" : "bg-rose-400"
              } h-4 rounded-full`}
              style={{ width: WeekPercentMiss.toString() + "%" }}
            ></div>
            <h1 className="font-bold items-center text-sm text-sky-900">
              {WeekPercentMiss.toFixed(2)} %{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-full items-center align-center">
          <div>
            <h1 className="font-bold w-full py-4">Mes 1 de {TOTAL_MONTHS}</h1>
          </div>
          <div className="flex items-center align-center w-full bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className={`flex items-center justify-center py-2 ${
                MonthPercentMiss > 50 ? "bg-emerald-400" : "bg-rose-400"
              } h-4 rounded-full`}
              style={{ width: MonthPercentMiss.toString() + "%" }}
            ></div>
            <h1 className="font-bold items-center text-sm text-sky-900">
              {MonthPercentMiss.toFixed(2)} %{" "}
            </h1>
          </div>
        </div>

        <div className="flex flex-col w-full items-center align-center">
          <div>
            <h1 className="font-bold w-full py-4">Año 2023 </h1>
          </div>
          <div className="flex items-center align-center w-full bg-gray-300 rounded-full h-4 dark:bg-gray-700">
            <div
              className={`flex items-center justify-center py-2 ${
                YearPercentMiss > 50 ? "bg-emerald-400" : "bg-rose-400"
              } h-4 rounded-full`}
              style={{ width: YearPercentMiss.toString() + "%" }}
            ></div>
            <h1 className="font-bold text-sm text-sky-900">
              {YearPercentMiss.toFixed(2)} %{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <p className="text-sm text-slate-700">
          Hecho por{" "}
          <a
            className="text-sky-900 hover:text-sky-700"
            href="https://twitter.com/viistorrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>@viistorrr</i>
          </a>
        </p>
      </div>
      <div>
        <p className="text-sm text-slate-700">
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
