import jsonwebtoken from 'jsonwebtoken'
import { secret } from '../constants/env.constants.js'

const tokenToUser = (token) => {
    return jsonwebtoken.verify(token, secret)
}

export default tokenToUser
