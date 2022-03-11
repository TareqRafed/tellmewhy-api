import express from 'express'
import response from '../../../middlewares/response.js'

const router = express.Router()

router.route('/login').post((req, res, next) => {
    req.message = 'hey'
    req.data = 'hey'
    req.success = true
    next()
}, response)

export default router
