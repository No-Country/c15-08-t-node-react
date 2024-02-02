const { Router } = require('express')
const cron = require('node-cron');
const { 
    createAvailabilityDates, 
    disablePreviousDates } = require('../controllers/availability.controller');


const router =  Router()

cron.schedule('*/10 * * * *', async () => {
    await createAvailabilityDates();
    console.log('Tarea cron createAvailabilityDates completada con éxito');
  
}, {
  scheduled: true,
  timezone: "America/Sao_Paulo"
});

cron.schedule('*/20 * * * *', async() => {
   
    await disablePreviousDates();
    console.log('Tarea cron disablePreviousDates completada con éxito');
  
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