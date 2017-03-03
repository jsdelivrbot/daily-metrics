import assert from 'assert'
import request from 'supertest'
import app from '../lib/app'

describe('The express app', () => {
  it('handles a GET request to /api', (done) => {
      request(app)
        .get('/api')
        .end((err, response) => {
          // console.log(response)
          assert(response.body.hi === 'there')
          done()
        })
  })
})
