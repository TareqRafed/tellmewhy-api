import express from 'express'

import chat from './chat/index.js'

const router = express.Router()

router.use('/api/v1', chat)

export default router
