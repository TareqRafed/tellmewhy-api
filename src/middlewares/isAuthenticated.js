const isAuthenticated = (req, res, next) => {
    // TODO: Check token or throw err
    next()
}

export default isAuthenticated
