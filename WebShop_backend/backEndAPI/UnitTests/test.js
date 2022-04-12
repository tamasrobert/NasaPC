const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const request = require('supertest-session');

let chai = require('chai');
let should = chai.should();


const app = require('../app');
const { expect } = require('chai');
var testSession = null;

// API tests

describe('GET /products', function () {
    it('should list all products - no authentication/free-wiew', function (done) {
        request(app)
            .get('/api/products')
            .expect(200, done)
    });
});


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
   
    it('should get a restricted page / get a session', function (done) {
      authenticatedSession.get('/api/session')
        .expect(200)
        .end((err, res)=>{
          expect(res.body)
          .to.be.an.instanceof(Array)
          .and.to.have.property(0)
          .that.includes.all.keys([ 'email', 'admin' ]);
          expect(res.body[0].email).to.equal('admin@email.com');
          expect(res.body[0].admin).to.equal(true);
          done();
        })
    });

    // it("should post a new product", function(done){

    //   let product = {

    //     "_id": "6252a9584314ad3fdc56cdb7",
    //     "name": "Test product one,EDITED",
    //     "description": "asd asd asd asd asd asd asd asda sdasda",
    //     "price": "225555",
    //     "category": "CPU",
    //     "path": "asd",
    //     "discount": 10

    //   }

    //   console.log("a")
    //   authenticatedSession
    //       .post('/api/admin/add-product')
    //       .send(product)
    //       .end(function(err, res){
    //         expect(res.status).to.equal(201);
    //         res.body.should.be.a('object');
    //         res.body.should.have.property('name');
    //         expect(res.body.name).to.equal('Test product one,EDITED');
    //         done();
    //       })

    //   });
   
  });


