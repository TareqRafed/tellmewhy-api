import request from 'supertest'
import app from '../../../../index.js'

describe('testing login route', () => {
    it('Sends email and password, returns 200 with token', async () => {
        const res = await request(app).post('/api/v1/admin/login').send({
            email: 'x',
            password: 'x',
        })
        expect(res.statusCode).toBe(200)
        expect(res.body.data.token).toBeDefined()
    })

    it('Sends missing field, returns 401', async () => {
        const localRes = await request(app).post('/api/v1/admin/login').send({
            email: 'x',
        })
        expect(localRes.statusCode).toBe(401)
        expect(localRes.body.success).toBe(false)
    })
})
