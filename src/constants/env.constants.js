import dotenv from 'dotenv'

const envFilePath = `.${process.env.NODE_ENV}.env`

dotenv.config({ silent: true, path: envFilePath })

export const isDev = envFilePath === 'dev'
export const origin = isDev ? '*' : process.env.origin
export const { PORT, secret } = process.env
