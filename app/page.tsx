import Clock from "@components/Clock";
import Error from "@components/Error";

import {
  API_TIME_URL,
  API_OPTIONS_URL,
  weekDays,
  months,
  getMonthPercent,
  getCurrentYear,
  TOTAL_DAYS,
  TOTAL_WEEKS,
  TOTAL_MONTHS,
  TOTAL_WEEK_DAYS
} from "@utils/constants";

const getColor = (percent: number) => {
  if (percent <= 33.3333) {
    return "bg-rose-400";
  } else if (33.3333 < percent && percent <= 66.6666) {
    return "bg-amber-400";
  } else {
    return "bg-emerald-400";
  }
};

async function getData() {
  const res = await fetch(API_TIME_URL, API_OPTIONS_URL);
  return res.json();
}

export default async function Home() {
  const localTimeData = await getData();
  const globalDate = new Date(localTimeData.datetime);
  const {day_of_week, day_of_year, week_number} = localTimeData;
  const date = globalDate.getDate();
  const month = globalDate.getMonth() + 1;
  const localDateTime = new Date(localTimeData.datetime).toLocaleString(
    "es-ES",
    {
      timeZone: "America/Bogota",
    }
  );
  let weekDay = day_of_week;
  if (weekDay === 0) {
    weekDay = 7; //Domingo
  }
  
  const YearPercent = (day_of_year / TOTAL_DAYS) * 100;
  const currentWeekPercent = (weekDay / TOTAL_WEEK_DAYS) * 100;

  const hoy = new Date();
  const date2 = new Date("2023-12-31");
  
  const dateDiff = (hoy: Date, date2: Date) => {
    const diff = hoy.getTime() - date2.getTime();
    
    let days = Math.floor(diff / (1000 * 3600 * 24));

    return days;
  }
  
  return (
    <main className="flex flex-col w-full justify-center items-center h-screen bg-white text-slate-700">
      {month ? <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 items-center justify-center">
        <div className="py-2">
          <h2 className="flex justify-center text-lg font-bold text-slate-700 py-2">
            {localDateTime.slice(0, 10).replace(/,/g, "")}
          </h2>
          <h1 className="text-xl font-bold text-slate-700">
            Día {day_of_year} de {TOTAL_DAYS}
          </h1>
        </div>
        <span className="px-4 text-base font-bold bg-emerald-100 rounded-full border-2 border-emerald-400">{weekDays[weekDay]}</span>
        <div className="w-full  pr-8 pb-8 pl-8">
        <div className="flex flex-col w-full items-center align-center justify-center border-2 rounded-lg border-slate-300 pt-2 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
            <h1 className="text-lg font-bold text-slate-700 py-2">
              {getCurrentYear()}
            </h1>
            <div className="flex flex-row w-full items-center align-center">
              <div className="flex items-center w-11/12 bg-slate-100 rounded-full h-4">
                <div
                  className={`flex items-center justify-center py-2 ${getColor(
                    YearPercent
                  )} h-4 rounded-full`}
                  style={{ width: YearPercent.toString() + "%" }}
                ></div>
              </div>
              <h1 className="w-1/12 pl-2 pr-8 font-bold items-center text-sm text-sky-900">
                {YearPercent.toFixed(0)}%
              </h1>
            </div>
          </div>

          <div className="flex flex-col w-full items-center align-center justify-center border-2 rounded-lg border-slate-300 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
            <h1 className="font-bold py-4 text-slate-700">
            {months[month].name} | Mes {month} de {TOTAL_MONTHS}
            </h1>
            <div className="flex flex-row w-full items-center align-center">
              <div className="flex items-center w-11/12 bg-slate-100 rounded-full h-4">
                <div
                  className={`flex items-center justify-center py-2 ${getColor(
                    getMonthPercent(month, date)
                  )} h-4 rounded-full`}
                  style={{
                    width: getMonthPercent(month, date).toString() + "%",
                  }}
                ></div>
              </div>
              <h1 className="w-1/12 pl-2 pr-8 font-bold items-center text-sm text-sky-900">
              {getMonthPercent(month, date).toFixed(0)}%
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-full items-center align-center justify-center border-2 rounded-lg border-slate-300 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
            <h1 className="font-bold py-4">
              Semana {week_number} de {TOTAL_WEEKS}
            </h1>
            
            <div className="flex flex-row w-full items-center align-center">
              <div className="flex items-center w-11/12 bg-slate-100 rounded-full h-4">
                <div
                    className={`flex items-center justify-center py-2 ${getColor(
                      currentWeekPercent
                    )} h-4 rounded-full`}
                  style={{
                    width: currentWeekPercent.toString() + "%"
                  }}
                ></div>
              </div>
              <h1 className="w-1/12 pl-2 pr-8 font-bold items-center text-sm text-sky-900">
              {currentWeekPercent.toFixed(0)}%
              </h1>
            </div>
          </div>
          
        </div>
      </div> : <Error />}
      <a
        key="Twitter"
        href="https://twitter.com/intent/tweet?text=https://www.progresodelano.info/ @viistorrr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:text-sky-600"
      >
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
          style={{ backgroundColor: "#1da1f2" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-3.5 h-3.5 mr-2"
          >
            <path
              fill="currentColor"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            />
          </svg>
          Compartir en Twitter
        </button>
      </a>
      <span className="py-4 text-base ">😁✌🏾</span>
      <div className="">
        <p className="text-sm text-slate-700">
          Desarrollado por{" "}
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
