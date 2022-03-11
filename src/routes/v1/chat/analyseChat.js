import express from 'express'

import chat from '../../../controllers/chat'

const router = express.Router()

router.post('/chat', chat)

export default router
