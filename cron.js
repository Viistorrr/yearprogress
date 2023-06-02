import cron from 'node-cron';

// Define la tarea a ejecutar
const task = () => {
  console.log('¡Cronjob ejecutado!');
  // Aquí puedes colocar el código que deseas ejecutar en tu cronjob
};

// Configura el cronjob para que se ejecute cada minuto
cron.schedule('* * * * *', task);