/* eslint-disable import/no-extraneous-dependencies */
import prompt from 'prompt'
import colors from '@colors/colors/safe.js'
import { PrismaClient } from '@prisma/client'
import hashPassword from '../src/helpers/hashPassword.js'

prompt.message = colors.bgBlack('Question!')
prompt.delimiter = colors.green('><')

prompt.start()

prompt.get(
    {
        properties: {
            email: {
                description: colors.bold('What is your E-mail?'),
                allowEmpty: false,
                required: true,
            },
            password: {
                description: colors.bold('What is your Password?'),
                required: true,
                minLength: 6,
                hidden: true,
                replace: '*',
                message: 'Password must be more than 6 char',
            },
        },
    },
    async (err, result) => {
        if (err) {
            console.log(err)
            return
        }

        try {
            const { email, password } = result
            const prisma = new PrismaClient()
            const pwd = await hashPassword(password)
            const user = await prisma.user.create({
                data: {
                    email,
                    password: pwd,
                },
            })

            console.log(colors.cyan(`${user.email} is a new Admin!`))
        } catch (e) {
            console.log(e)
        }
    }
)
