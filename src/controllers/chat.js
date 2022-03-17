const processData = (fileData) => {
    const msgs = fileData.toString('utf-8').split(/\r?\n|\r/)

    const pattern = /^\[?(\d+[./]\d+[./]\d+),\s+[^\]-]+[\]-]?\s([^:]+):\s*(.*)/

    const data = []

    let prevday
    msgs.forEach((line) => {
        // Skip empty lines
        if (!line) return

        const match = pattern.exec(line)

        // Throw an error to break the forEach and return from function
        if (!match) throw new Error('Error: File Format!')
        const [, date, name] = match

        if (prevday && prevday.date === date) {
            if (name in prevday.recipients) prevday.recipients[name] += 1
            else prevday.recipients[name] = 1
        } else {
            prevday = {
                date,
                recipients: {},
            }
            prevday.recipients[name] = 1
            data.push(prevday)
        }
    })
    return data
}

const chat = (req, res, next) => {
    try {
        const data = processData(req.files.chat.data)
        res.locals = {
            success: true,
            message: 'succesfully parsed file',
            data,
        }
    } catch (err) {
        res.locals = {
            success: false,
            message: err.message,
            data: null,
        }
    }
    next()
}

export default chat
