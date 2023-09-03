import { getFirestore, doc, getDoc } from "firebase/firestore";
import Clock from "@components/Clock";
import Error from "@components/Error";
import { firebaseApp } from "@app/firebase/config"
import { Footer } from "@components/Footer";
import Toast from "@components/Toast";
import WeekInfo from "@components/WeekInfo";
import MonthInfo from "@components/MonthInfo";
import YearInfo from "@components/YearInfo";
import { updateData, scheduleNextUpdate } from "@utils/dateinfo";



import {
  weekDays,
  months,
  getMonthPercent,
  TOTAL_DAYS,
  TOTAL_WEEK_DAYS,
  getCurrentYear
} from "@utils/constants";

const db = getFirestore(firebaseApp)

const getColor = (percent: number) => {
  if (percent && percent <= 33.3333) {
    return "bg-rose-400";
  } else if (33.3333 < percent && percent <= 66.6666) {
    return "bg-amber-400";
  } else {
    return "bg-emerald-400";
  }
};

export default async function Home() {
  updateData();
  scheduleNextUpdate();
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
  const yearPercent = (dayOfYear / TOTAL_DAYS) * 100;

  return (
    <main className="flex flex-col w-full justify-center items-center h-screen bg-white text-slate-700">
      {dbDate ?
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 items-center justify-center">
          <Clock />
          <h2 className="flex justify-center text-2xl font-bold text-slate-600">
            {formattedDate}
          </h2>
          <div className="w-full pr-8 pb-8 pl-8">
            <div className="flex flex-col w-full h-min items-center align-center justify-center border-2 rounded-lg border-slate-300 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
              <WeekInfo
                weekNumber={weekNumber}
                currentWeekPercent={currentWeekPercent}
                dayOfWeek={dayOfWeek}
                color={getColor(currentWeekPercent)}
                 />
            </div>
            <div className="flex flex-col w-full h-min items-center align-center justify-center border-2 rounded-lg border-slate-300 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
              <MonthInfo
                month={month}
                day={day}
                formattedDate={formattedDate}
                months={months} 
                color={getColor(getMonthPercent(month, day))}
                currentMonthPercent={getMonthPercent(month, day)}
                />
            </div>
            <div className="flex flex-col h-min w-full items-center align-center justify-center border-2 rounded-lg border-slate-300 pt-2 pr-8 pb-8 pl-8 shadow-lg mt-4 hover:pr-6 hover:pr-b6 hover:pl-6 hover:shadow-xl">
              <YearInfo
                currentYear={getCurrentYear()}
                yearPercent={yearPercent}
                dayOfYear={dayOfYear}
                color={getColor(yearPercent)} />
            </div>
          </div>
        </div> : <Error />}
      <Footer />
      <Toast />
    </main>
  );
}
