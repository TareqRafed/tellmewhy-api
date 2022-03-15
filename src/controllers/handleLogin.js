const generateToken = (email, password) => {
    // TODO: Implement JWT
    return `${email} ${password} ${Math.random()}`
}

const handleLogin = (req, res, next) => {
    const { email } = req.body || {}
    const { password } = req.body || {}

    if (!email || !password) {
        res.status(401)
        res.locals = {
            message: 'Email or Password is incorrect',
            data: null,
            sucess: false,
        }
        next()
    }
    res.locals = {
        message: 'User logged in successfuly',
        data: { email, token: generateToken(email, password) },
        success: true,
    }
    next()
}

export default handleLogin
