import cron from 'node-cron';

// Define la tarea a ejecutar
export const date = () => {
  // Aquí puedes colocar el código que deseas ejecutar en tu 
  const date = new Date();
  console.log("date inside cron")
  return date;
};

// Configura el cronjob para que se ejecute cada minuto
cron.schedule('* * * * *', date);