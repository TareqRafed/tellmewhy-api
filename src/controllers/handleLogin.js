import bcryptjs from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import tokenGenerator from '../helpers/tokenGenerator.js'

const handleLogin = async (req, res, next) => {
    const { email } = req.body || {}
    const { password } = req.body || {}

    const prisma = new PrismaClient()

    const user = await prisma.user.findFirst({
        where: {
            email,
        },
    })

    const isAuth = await bcryptjs.compare(password, user.password)

    if (!email || !password || !user || !isAuth) {
        res.status(401)
        res.locals = {
            message: 'Email or Password is incorrect',
            data: null,
            success: false,
        }
        next()
    }

    const token = tokenGenerator(user)
    user.token = token

    res.locals = {
        message: 'User logged in successfuly',
        data: {
            email,
            token: user.token,
        },
        success: true,
    }
    next()
}

export default handleLogin
