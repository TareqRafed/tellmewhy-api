import bcryptjs from 'bcryptjs'

const hashPassword = async (password) => {
    return bcryptjs.hash(password, 10)
}

export default hashPassword
