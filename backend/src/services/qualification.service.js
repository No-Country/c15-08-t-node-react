
const Bookings = require('../models/bookings.model')
const Qualification = require('../models/qualification.model')
const User = require('../models/user.model')
const { findBooking  } = require('../services/booking.service')
const { findData } = require('../services/user.service')
const { Op } = require('sequelize');

const createQualify = async(body) => { // stars, comment, userId, bookingId
   const { bookingId, userId } = body
   
   let id = bookingId
   const booking = await findBooking ({id}) 
   if(!booking) { throw new Error('BOOKING_NO_EXIT') }

   const bookings = await findBookingQualification ({bookingId}) 
   if(bookings) { throw new Error('BOOKING_HAS_ALREADY_BEEN_RATED') }
   
   id = userId
   const user = await findData({id})
   if(!user){ throw new Error('USER_DOES_NOT_EXIST') }

   const newQualify = await createBooking({...body})

   const session = {
       id: newQualify.id,
       stars: newQualify.stars, 
       comment: newQualify.comment, 
       status: newQualify.status, 
       userId: newQualify.userId,  
       bookingId: newQualify.bookingId, 
   }
   
   return session
}

const qualifyHistory = async() => {
   
   const qualifications = await allQualification()
   return qualifications

}

const createBooking = async(data) => await Qualification.create(data)
const findBookingQualification = async(where) => await Qualification.findOne(where)

const allQualification = async() =>  {
   const result = await Qualification.findAll({
      attributes: ['id', 'stars', 'comment'],
      include: [
         {
            model: User,
            as: 'user',
            attributes: ['firstname', 'lastname']

         }
      ]  
   })
   return result
}


const needToQualify = async(params) => {
   
   const userId = params.userId
   const today = new Date
   console.log(userId)
   const toQualify = await Bookings.findOne({
     where: { 
      userId, 
      status: { [Op.notIn]: ['cancelled', 'ghost'] }, 
      qualify: 'enabled',
      date: {[Op.lt]: today}
     },
     order: [['date', 'DESC']],
   })

  
   console.log(toQualify)

   if(!toQualify) return 'ok'

   const result = {
      id: toQualify.id,
      date: toQualify.date,
      userId,
   }

   console.log(result)

   return result

}

module.exports = {
   createQualify,
   qualifyHistory,
   needToQualify
}