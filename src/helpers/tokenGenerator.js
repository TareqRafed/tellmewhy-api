import jsonwebtoken from 'jsonwebtoken'
import { secret } from '../constants/env.constants.js'

const tokenGenerator = (user) => {
    return jsonwebtoken.sign({ id: user.id, email: user.email }, secret)
}

export default tokenGenerator
