const express = require('express')
const cors = require('cors')
const cron = require('node-cron');
const { disablePreviousDates, createAvailabilityDates } = require('./controllers/availability.controller');

const server = express()

if(process.env.DEV) {
    console.log('DEVELOPMENT-MODE!!!')
    const morgan = require('morgan')
    server.use(morgan('dev'))
}

// Middlewares
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

cron.schedule('*/5 * * * *', async () => {
  console.log('Ejecutando tarea cron createAvailabilityDates');
  try {
    await createAvailabilityDates();
    console.log('Tarea cron createAvailabilityDates completada con éxito');
  } catch (error) {
    console.error('Error en la tarea cron createAvailabilityDates:', error);
  }
}, {
  scheduled: true,
  timezone: "America/Sao_Paulo"
});

cron.schedule('*/10 * * * *', async () => {
  console.log('Ejecutando tarea cron createAvailabilityDates');
  try {
    await disablePreviousDates();
    console.log('Tarea cron createAvailabilityDates completada con éxito');
  } catch (error) {
    console.error('Error en la tarea cron createAvailabilityDates:', error);
  }
}, {
  scheduled: true,
  timezone: "America/Sao_Paulo"
});


server.use('/api/v1', require('./routes/api.routes'))


module.exports = server


