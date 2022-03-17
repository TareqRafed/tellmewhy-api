import express from 'express'
import fileUpload from 'express-fileupload'

import { chat } from '../../../controllers/index.js'

import response from '../../../middlewares/response.js'

const router = express.Router()

router.post('/chat', fileUpload(), chat, response)

export default router
