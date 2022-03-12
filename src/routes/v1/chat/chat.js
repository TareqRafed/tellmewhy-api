import express from 'express'
import fileUpload from 'express-fileupload'

<<<<<<< HEAD
import { chat } from '../../../controllers/index.js'
=======
import chat from '../../../controllers/chat.js'
>>>>>>> ab5061a (refactored code)

const router = express.Router()

router.use(fileUpload()).post('/chat', chat)

export default router
