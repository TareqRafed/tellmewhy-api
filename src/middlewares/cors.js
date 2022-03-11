import cors from 'cors'
import { origin } from '../constants/env.constants.js'

export default cors({
    origin,
    credentials: true,
})
