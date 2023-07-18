import cron from 'node-cron';
import { updateDoc } from "firebase/firestore";

// Define la tarea a ejecutar
export const updateData = async () => {
  //update current day info
  const currentDay = doc(db, "yearprogress", "today");
  updateDoc(currentDay, {
    date: new Date
  });
}

// Configura el cronjob para que se ejecute cada minuto
cron.schedule('* * * * *', updateData);