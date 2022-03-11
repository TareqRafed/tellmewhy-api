const handleMessage = (message, success) => {
    if (message) return message
    if (success) return 'Operation done successfuly'
    return 'Some error happend'
}

/**
 * Format response
 * @param {Object} Object - Contains request state
 * @param {String} Object.message - The message. <----- how should this be documented?
 * @param {any} Object.data - data to respone with
 * @param {Boolean} Object.success - whether request succeeded or not
 * @param {response} res - express response
 */
const response = ({ message, data, success }, res) => {
    const msg = handleMessage(message)

    res.send({
        success,
        message: msg,
        data,
    })
}

export default response
