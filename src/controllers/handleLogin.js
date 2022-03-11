const generateToken = (email, password) => {
    return `${email} ${password} ${Math.random()}`
}

const handleLogin = (req, res, next) => {
    const email = req.body?.email
    const password = req.body?.password

    if (!email || !password) {
        res.status(401).send({
            message: 'Missing Field',
        })
    }

    next({
        message: 'User logged in successfuly',
        data: { email, token: generateToken(email, password) },
        success: true,
    })
}

export default handleLogin
