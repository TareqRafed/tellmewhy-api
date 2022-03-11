import express from 'express'
import chat from './analyseChat'

const router = express.Router()

router.use(chat)

export default router
