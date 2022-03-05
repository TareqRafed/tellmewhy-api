import dotenv from 'dotenv';

const envFilePath = `.env.${process.env.NODE_ENV}`

dotenv.config({ silent: true, path: envFilePath })

export const isDev = envFilePath === 'dev'
export const PORT = process.env.PORT
