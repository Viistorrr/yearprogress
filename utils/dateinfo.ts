import { firebaseApp } from "@app/firebase/config"
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import {
    weekDays,
    months,
    getMonthPercent,
    TOTAL_DAYS,
    TOTAL_WEEK_DAYS,
    getCurrentYear
  } from "@utils/constants";

  const db = getFirestore(firebaseApp)

  export const updateData = async () => {
    const currentDay = doc(db, "yearprogress", "today");
    updateDoc(currentDay, {
      date: new Date
    });
    setInterval(updateData, 24 * 60 * 60 * 1000);
  }

  export function scheduleNextUpdate() {
    const now:any = new Date();
    
    let nextUpdate:any = new Date(now);
    nextUpdate.setHours(9, 45, 0, 0);
  
    if (nextUpdate <= now) {
      // Si ya pasó la hora de la actualización de hoy, programamos para mañana
      nextUpdate.setDate(nextUpdate.getDate() + 1);
    }
  
    const timeUntilUpdate:any = nextUpdate - now;
    
    // Programamos la próxima actualización
    setInterval(updateData, timeUntilUpdate);
  }

export const options = { timeZone: 'America/Bogota',  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  //let docRef = doc(db, "yearprogress", "today");
  //const docSnap = await getDoc(docRef);
  /*const fecha = docSnap.data();
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
  const yearPercent = (dayOfYear / TOTAL_DAYS) * 100;*/

  export default options