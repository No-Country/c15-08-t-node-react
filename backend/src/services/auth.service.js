const { findData, createUser } = require('../services/user.service')
const bcrypt = require('bcryptjs')
const { generateRandomNumber } = require('../libs/handleRandomNumber')
const { 
    sendRegisterNotification, 
    sendWelcomeMessage,
    sendRecoverMessage,
    sendRecoveredMessage 
    } = require('../services/email.services')
const { USER_STATUS } = require('../configs/constants')


const registerService = async (body) => {
    const { email } = body
    
    const user = await findData({email})
    if (user) { throw new Error('USER_EXIST') }
    
    const validator =generateRandomNumber().toString()

    const newUser = await createUser({ ...body, validator })
    
    await sendRegisterNotification(newUser)
    
    const session = {
        id: newUser.id,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        status: newUser.status
    }

    return session
}


const loginService = async (body) => {
    const {
        email,
        password 
    } = body

    const user = await findData({email})
    if(!user){ throw new Error('USER_DOES_NOT_EXIST') }
    
    const hash = user.password
    
    const verifyPassword = bcrypt.compareSync(password, hash)
   
    if(!verifyPassword){ throw new Error ('WRONG_PASSWORD') }
    
    return 'USER LOGGED'  
}

const validateUser = async (body) => {
    const {
        email,
        code
     } = body

    const user = await findData({email})
    if(!user){ throw new Error('USER_DOES_NOT_EXIST') }
    if(user.validator !== code ) throw new Error('INVALID_CODE')
    
    const previousStatus= user.status 

    user.status = USER_STATUS.ACTIVATE
    await user.save()

    if(previousStatus === USER_STATUS.PENDING) {
        await sendWelcomeMessage({email})
    } else {
        await sendRecoveredMessage({email})
    }


    const session = {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        status: user.status
    }

    return session

}

const recoverPasswor = async(email) => {
  
    const user = await findData({email})
    if(!user){ throw new Error('USER_DOES_NOT_EXIST') }

    const validator =generateRandomNumber().toString()

    user.validator = validator
    user.status = USER_STATUS.RECOVER
    await user.save() 

    await sendRecoverMessage({email, validator})

    const session = {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        status: user.status
    }

    return session

}





module.exports = { registerService, loginService, validateUser, recoverPasswor, sendRecoverMessage }