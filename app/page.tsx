import {
  weekDays,
  TOTAL_DAYS,
  TOTAL_WEEK_DAYS,
  TOTAL_WEEKS,
  TOTAL_MONTHS,
  TOTAL_HOURS,
  API_TIME_URL,
  API_OPTIONS_URL,
} from "@utils/constants";

async function getData() {
  const res = await fetch(API_TIME_URL, API_OPTIONS_URL);
  return res.json();
}

export default async function Home() {
  const localTimeData = await getData();
  const globalDate = new Date(localTimeData.datetime);
  const localDateTime = new Date(localTimeData.datetime).toLocaleString(
    "es-ES",
    {
      timeZone: "America/Bogota",
    }
  );

  const utcOffset = localTimeData.utc_offset;
  const utcOffsetHours = utcOffset.slice(0, 3);
  const date = globalDate.getDate();
  const hours = globalDate.getHours() - parseInt(utcOffsetHours);
  const week = Math.ceil(date / 7);
  const month = globalDate.getMonth() + 1;
  const weekDay = localTimeData.day_of_week;
  const YearPercent = (date / TOTAL_DAYS) * 100;
  const MonthPercent = (date / TOTAL_MONTHS) * 100;
  const DayPercent: any = (hours / TOTAL_HOURS) * 100;
  const DayPercentMiss: any = 100 - DayPercent;
  const WeekPercent = (weekDay / TOTAL_WEEK_DAYS) * 100;

  const setColor = (percent: number) => {
    if (percent < 33.3333) {
      return "bg-rose-400";
    } else if (33.3333 < percent && percent < 66.6666) {
      return "bg-amber-400";
    } else {
      return "bg-emerald-400";
    }
  };

  return (
    <main className="flex flex-col w-full justify-center items-center p-10 h-screen">
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 items-center justify-center">
        <h1 className="text-lg font-bold text-slate-700">
          {weekDays[weekDay]} {localDateTime}
        </h1>
        <div className="flex flex-col w-full items-center align-center justify-center">
          <h1 className="font-bold py-4">
            Día {localTimeData.day_of_year} de {TOTAL_DAYS}
          </h1>
          <div className="flex flex-row w-full items-center align-center ">
            <div className="flex items-center w-11/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
              <div
                className={`flex items-center justify-center py-2 ${setColor(
                  DayPercent
                )} h-4 rounded-full`}
                style={{ width: DayPercent.toString() + "%" }}
              ></div>
            </div>
            <h1 className="w-1/12 pl-2 font-bold items-center text-sm text-sky-900">
              {DayPercent.toFixed(1)} %{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-full items-center align-center justify-center">
          <h1 className="font-bold py-4">
            Semana {week} de {TOTAL_WEEKS}
          </h1>
          <div className="flex flex-row w-full items-center align-center">
            <div className="flex items-center w-11/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
              <div
                className={`flex items-center justify-center py-2 ${setColor(
                  WeekPercent
                )} h-4 rounded-full`}
                style={{ width: WeekPercent.toString() + "%" }}
              ></div>
            </div>
            <h1 className="w-1/12 pl-2 font-bold items-center text-sm text-sky-900">
              {WeekPercent.toFixed(1)} %{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-full items-center align-center justify-center">
          <h1 className="font-bold py-4">
            Mes {month} de {TOTAL_MONTHS}
          </h1>
          <div className="flex flex-row w-full items-center align-center">
            <div className="flex items-center w-11/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
              <div
                className={`flex items-center justify-center py-2 ${setColor(
                  MonthPercent
                )} h-4 rounded-full`}
                style={{ width: MonthPercent.toString() + "%" }}
              ></div>
            </div>
            <h1 className="w-1/12 pl-2 font-bold items-center text-sm text-sky-900">
              {MonthPercent.toFixed(1)} %{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-full items-center align-center justify-center">
          <h1 className="font-bold py-4">Año 2023</h1>
          <div className="flex flex-row w-full items-center align-center">
            <div className="flex items-center w-11/12 bg-gray-300 rounded-full h-4 dark:bg-gray-700">
              <div
                className={`flex items-center justify-center py-2 ${setColor(
                  YearPercent
                )} h-4 rounded-full`}
                style={{ width: YearPercent.toString() + "%" }}
              ></div>
            </div>
            <h1 className="w-1/12 mx-2 px-2 font-normal items-center text-sm text-sky-900">
              {YearPercent.toFixed(1)} %{" "}
            </h1>
          </div>
        </div>
      </div>
      <span className="py-4 text-base italic">Ey, gracias por entrar😁✌🏾</span>
      <div className="">
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
