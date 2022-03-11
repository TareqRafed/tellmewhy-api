import express from 'express'
import fileUpload from 'express-fileupload'

import { chat } from '../../../controllers/index.js'

const router = express.Router()

router.use(fileUpload()).post('/chat', chat)

export default router
