import express from 'express'
import { PORT } from './src/constants/env.constants'
import routes from './src/routes/v1'
import { cors } from './src/middlewares'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors)

app.use(routes)

app.get('/', (rq, rs) => {
    rs.send('ra ra ra test')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
    console.log(`env: ${process.env.NODE_ENV}`)
})
