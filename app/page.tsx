import Clock from "@components/Clock";
import Error from "@components/Error";
import { firebaseApp } from "./firebase/config"
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import Likes from "@components/Likes";

import {
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

const db = getFirestore(firebaseApp)

const updateData = async () => {
  //update current day info
  const currentDay = doc(db, "yearprogress", "today");
  updateDoc(currentDay, {
    date: new Date
  });
}

export default async function Home() {
  updateData()
  const options = { timeZone: 'America/Bogota',  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  //get current day info
  let docRef = doc(db, "yearprogress", "today");
  const docSnap = await getDoc(docRef);
  const fecha = docSnap.data();
  let dbDate = new Date(fecha?.date.seconds * 1000)
  const day = dbDate.getDate();
  const month = (dbDate.getMonth() + 1);
  const year = dbDate.getFullYear().toString();
  let formattedDate = formatter.format(dbDate);
  formattedDate = `${day}/${month}/${year}`;
  const yearStart = new Date(dbDate.getFullYear(), 0, 0);
  const diff = (dbDate.getTime() - yearStart.getTime()) + ((yearStart.getTimezoneOffset() - dbDate.getTimezoneOffset()) * 60 * 1000);
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const dayOfWeek = weekDays[dbDate.getDay()];
  let dayOfWeekd = dbDate.getDay()
  if(dayOfWeekd == 0) dayOfWeekd = 7
  const currentWeekPercent = (dayOfWeekd / TOTAL_WEEK_DAYS) * 100;
  const firstDayOfYear = new Date(dbDate.getFullYear(), 0, 1);
  const pastDaysOfYear = (dbDate.getTime() - firstDayOfYear.getTime()) / 86400000;
  let  weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay()) / 7);
  if(dayOfWeekd == 7) weekNumber = weekNumber - 1
  const YearPercent = (dayOfYear / TOTAL_DAYS) * 100;

  return (
    <main className="flex flex-col w-full justify-center items-center h-screen bg-white text-slate-700">
      {dbDate ? <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 items-center justify-center pt-8">
      <div className="flex w-8/12 items-center">
        <div className="w-1/2 grid place-content-center">
          <h2 className="flex justify-center text-2xl font-bold text-slate-600 pr-6">
            {formattedDate}
          </h2>
        </div>
          <Clock />
      </div>
        <div className="w-full  pr-8 pb-8 pl-8">
        <div className="flex flex-col w-full items-center align-center justify-center border-2 rounded-lg border-slate-300 pt-2 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
            <h1 className="text-lg font-bold text-slate-700 py-2">
              Año {getCurrentYear()}
            </h1>
            <div className="flex flex-row w-full items-center align-center">
              <div className="flex items-center w-11/12 bg-slate-100 rounded-full h-4">
                <div
                  className={`flex items-center justify-end py-2 ${getColor(
                    YearPercent
                  )} h-4 rounded-full`}
                  style={{ width: YearPercent.toString() + "%" }}
                >
                  <span className="text-sm font-bold pr-4">
                    {dayOfYear} días
                  </span>
                </div>
              </div>
              <h1 className="w-1/12 pl-2 pr-8 font-bold items-center text-sm text-sky-900">
              {YearPercent.toFixed(0)}%
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-full items-center align-center justify-center border-2 rounded-lg border-slate-300 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
            <h1 className="font-bold py-4 text-slate-700">
            {month} meses de {TOTAL_MONTHS}
            </h1>
            <div className="flex flex-row w-full items-center align-center">
              <div className="flex items-center w-11/12 bg-slate-100 rounded-full h-4">
                <div
                  className={`flex items-center justify-end py-2 ${getColor(
                    getMonthPercent(month, day)
                  )} h-4 rounded-full`}
                  style={{
                    width: getMonthPercent(month, day).toString() + "%",
                  }}
                >
                  <span className="text-sm font-bold pr-4">
                    {formattedDate.substring(0,2)} de {months[month].name}
                  </span>
                </div>
              </div>
              <h1 className="w-1/12 pl-2 pr-8 font-bold items-center text-sm text-sky-900">
              {getMonthPercent(month, day).toFixed(0)}%
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-full items-center align-center justify-center border-2 rounded-lg border-slate-300 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
            <h1 className="font-bold py-4">
              {weekNumber} semanas de {TOTAL_WEEKS}
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
          </div>
        </div>
      </div> : <Error />}
      <div className="flex items-center align-center">
        <div className="w-3/4 mr-2">
          <a
            key="Twitter"
            href="https://twitter.com/intent/tweet?text=https://www.progresodelano.info/ @iprogresodelano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-sky-600"
          >

            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="px-4 py-2 text-white font-medium text-xs leading-tight rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              style={{ backgroundColor: "#1da1f2" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-3 h-3 mr-2"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
              Compartir
            </button>
          </a>
        </div>
        <div>
          <Likes />
        </div>
      </div>
      <div className="pt-4">
        <p className="text-sm text-slate-700">
          <a
            className="text-sky-900 hover:text-sky-700"
            href="https://github.com/Viistorrr/yearprogress"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>Repositorio de Github</i>
          </a>
        </p>
      </div>
      <div>
        <p className="text-sm text-slate-700 pb-2">
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
