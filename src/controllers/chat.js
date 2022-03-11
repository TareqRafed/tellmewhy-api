import formidable from 'formidable'

const form = new formidable.IncomingForm()

const chat = function (req, res) {
    form.parse(req, function (err, fields, files) {
        console.log(files)
    })
    console.log('after')
    res.end('hi')
}

export default chat
