const { Router } = require('express')
const cron = require('node-cron');
const { 
    createAvailabilityDates, 
    disablePreviousDates } = require('../controllers/availability.controller');


const router =  Router()

cron.schedule('0 14 * * *', async () => {
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

cron.schedule('1 0 * * *', async () => {
  console.log('Ejecutando tarea cron disablePreviousDates');
  try {
    await disablePreviousDates();
    console.log('Tarea cron disablePreviousDates completada con éxito');
  } catch (error) {
    console.error('Error en la tarea cron disablePreviousDates:', error);
  }
}, {
  scheduled: true,
  timezone: "America/Sao_Paulo"
});


router.use('/auth', require('./auth.routes'))
router.use('/user', require('./user.routes'))
router.use('/availability', require('./availability.routes'))
router.use('/booking', require('./booking.routes'))
router.use('/qualification', require('./qualification.routes'))

module.exports = router