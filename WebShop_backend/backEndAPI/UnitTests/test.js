const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const request = require('supertest-session');

let chai = require('chai');
let should = chai.should();


const app = require('../app')
var testSession = null;

describe('after authenticating session', function () {
 
    var authenticatedSession;
   
    beforeEach(function (done) {
    testSession = request(app);

      testSession.post('/api/login')
        .send({ email: 'admin@email.com', password: 'admin' })
        .expect(200)
        .end(function (err) {
          if (err) return done(err);
          authenticatedSession = testSession;
          return done();
        });
    });
   
    it('should get a restricted page', function (done) {
      authenticatedSession.get('/api/session')
        .expect(200)
        .end(done)
    });
   
  });

// // API tests
// describe('GET /products', function () {
//     it('List all products', function (done) {
//         request(app)
//             .get('/api/products')
//             .expect(200, done)
//     });
// });


