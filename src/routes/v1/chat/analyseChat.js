import express from 'express'

import { chat } from '../../../controllers/index.js'

const router = express.Router()

router.post('/chat', chat)

export default router
