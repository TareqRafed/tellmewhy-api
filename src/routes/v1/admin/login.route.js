import express from 'express'
import { handleLogin } from '../../../controllers/index.js'
import response from '../../../middlewares/response.js'

const router = express.Router()

router.route('/login').post(handleLogin, response)

export default router
