import Clock from "@components/Clock";
import Error from "@components/Error";
import { firebaseApp } from "./firebase/config"
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { Footer } from "@components/Footer";
import Toast from "@components/Toast";
import Timeline from "@components/Timeline";

import {
  weekDays,
  months,
  getMonthPercent,
  getCurrentYear,
  TOTAL_DAYS,
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
                {weekNumber} Semanas
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
              {month} Meses
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
                {getCurrentYear()}
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
      <Footer />
      <Toast />
    </main>
  );
}
