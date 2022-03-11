import cors from 'cors'
import { origin } from '../constants/env.constants'

export default cors({
    origin,
    credentials: true,
})
