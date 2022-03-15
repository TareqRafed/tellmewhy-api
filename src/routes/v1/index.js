import express from 'express'

import chat from './chat/index.js'
import admin from './admin/index.js'

const router = express.Router()

router.use('/api/v1', chat, admin)

export default router
