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

cron.schedule('0 23 */1 * *', async () => {
      await createAvailabilityDates();

}, {
   scheduled: true,
   timezone: "America/Sao_Paulo"
 }
);

cron.schedule('0 23 */1 * *', async () => {
   await disablePreviousDates()
}, {
   scheduled: true,
   timezone: "America/Sao_Paulo"
 }
);

server.use('/api/v1', require('./routes/api.routes'))


module.exports = server


