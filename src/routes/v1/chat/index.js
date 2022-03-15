import express from 'express'
import chat from './chat.route.js'

const router = express.Router()

router.use(chat)

export default router
