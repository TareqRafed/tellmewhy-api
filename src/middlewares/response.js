const handleMessage = (message, success) => {
    if (message) return message
    if (success) return 'Operation done successfuly'
    return 'Some error happend'
}

/**
 * Format response
 * @param {request} req - Contains request state
 * @param {response} res - express response
 * @param {String} res.locals.message - The message. <----- how should this be documented?
 * @param {any} res.locals.data - data to respone with
 * @param {Boolean} res.locals.success - whether request succeeded or not
 */
const response = (req, res) => {
    const { message, success, data } = res.locals
    const msg = handleMessage(message, success)

    res.send({
        lang: 'en',
        message: msg,
        success,
        data,
    })
}

export default response
