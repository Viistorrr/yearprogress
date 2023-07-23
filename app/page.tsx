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
  const currentDay = doc(db, "yearprogress", "today");
  updateDoc(currentDay, {
    date: new Date
  });
}

export default async function Home() {
  updateData()
  const options = { timeZone: 'America/Bogota',  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
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
      {dbDate ?
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 items-center justify-center">     
          <Clock />
          <h2 className="flex justify-center text-2xl font-bold text-slate-600">
            {formattedDate}
          </h2>
          <div className="w-full  pr-8 pb-8 pl-8">
          <div className="flex flex-col w-full items-center align-center justify-center border-2 rounded-lg border-slate-300 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
              <h1 className="font-bold py-4">
                {weekNumber} Semanas de {TOTAL_WEEKS}
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
          
            <div className="flex flex-col w-full items-center align-center justify-center border-2 rounded-lg border-slate-300 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
              <h1 className="font-bold py-4 text-slate-700">
              {month} Meses de {TOTAL_MONTHS}
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
          </div>
        </div> : <Error />}
      <div className="flex items-center align-center">
      <div className="mx-2">
            <a
              key="Repositorio en Github"
              href="https://github.com/Viistorrr/yearprogress"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-600"
            >
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
              <svg width="30" height="30" fill="#075985" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0" fillRule="evenodd"/>
              </svg>

              </button>
            </a>
          </div>
        <div className="mx-2">
            <a
              key="Instagram"
              href="https://www.instagram.com/iprogresodelano"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-600"
            >
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 169.063 169.063">
                <path fill="#075985" d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z"/>
                <path fill="#075985" d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zm45.39-84.842c-2.89 0-5.729 1.17-7.77 3.22a11.053 11.053 0 0 0-3.23 7.78c0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z"/>
              </svg>
              </button>
            </a>
          </div>
          <div className="mx-2">
            <a
              key="Twitter"
              href="https://twitter.com/intent/tweet?text=https://www.progresodelano.info/ @iprogresodelano"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600"
            >
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <svg width="30" height="30" viewBox="0 -2 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#075985" d="M6.29 16c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0 0 20 1.89a8.273 8.273 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.292a8.303 8.303 0 0 1-2.606.98 4.153 4.153 0 0 0-5.806-.175 4.006 4.006 0 0 0-1.187 3.86A11.717 11.717 0 0 1 1.392.737a4.005 4.005 0 0 0 1.271 5.392A4.122 4.122 0 0 1 .8 5.624v.051c.001 1.923 1.378 3.579 3.292 3.96a4.144 4.144 0 0 1-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.315 8.315 0 0 1 0 14.185a11.754 11.754 0 0 0 6.29 1.812" fillRule="evenodd"/>
                </svg>
              </button>
            </a>
          </div>
          <Likes />
        </div>
      <div>
        <p className="text-sm text-slate-700 py-2">
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
