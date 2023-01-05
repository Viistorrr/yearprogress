import ProgressBar from "@components/ProgressBar";

import {
  weekDays,
  months,
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

const setColor = (percent: number) => {
  if (percent <= 33.3333) {
    return "bg-rose-400";
  } else if (33.3333 < percent && percent <= 66.6666) {
    return "bg-amber-400";
  } else {
    return "bg-emerald-400";
  }
};

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
  var hours = globalDate.getHours() + parseInt(utcOffset) + 13;
  if (hours == 19) hours = 7;
  if (hours == 20) hours = 8;
  if (hours == 21) hours = 9;
  if (hours == 22) hours = 10;
  if (hours == 23) hours = 11;
  if (hours == 24) hours = 12;

  //if (hours < 0) hours = globalDate.getHours() - 2 * parseInt(utcOffsetHours);

  const week = Math.ceil(date / 7);
  const month = globalDate.getMonth() + 1;
  const weekDay = localTimeData.day_of_week;
  const YearPercent = (date / TOTAL_DAYS) * 100;
  const MonthPercent = (date / TOTAL_MONTHS) * 100;
  const DayPercent: any = (hours / TOTAL_HOURS) * 100;
  const WeekPercent = (weekDay / TOTAL_WEEK_DAYS) * 100;

  return (
    <main className="flex flex-col w-full justify-center items-center p-10 h-screen dark:text-white">
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 items-center justify-center">
        <h1 className="text-lg font-bold text-slate-700 py-4">
          {weekDays[weekDay]} {localDateTime}
        </h1>
        <div className="w-full border-2 rounded-lg border-slate-300 pr-8 pb-8 pl-8 shadow-2xl">
          <ProgressBar
            label="Día"
            number={localTimeData.day_of_year}
            total={TOTAL_DAYS}
            percent={DayPercent}
          />

          {/* <ProgressBar
            label="Semana"
            number={week}
            total={TOTAL_WEEKS}
            percent={WeekPercent}
          />

          <div className="flex flex-col w-full items-center align-center justify-center">
            <h1 className="font-bold py-4">
              {months[month]} | Mes {month} de {TOTAL_MONTHS}
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
              <h1 className="w-1/12 px-2 font-bold items-center text-sm text-sky-900">
                {YearPercent.toFixed(1)} %{" "}
              </h1>
            </div>
          </div> */}
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
