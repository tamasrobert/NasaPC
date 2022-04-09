
// .env variables - .\WebShopProject\WebShop_backend\backEndAPI\.env
require("dotenv").config();

process.env.CONNECTION_STRING = process.env.CONNECTION_STRING_TEST;

let mongoose = require("mongoose");
let Product = require('../models/product');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
describe('Products', () => {
    beforeEach((done) => { //Before each test we empty the database
        Product.deleteMany({}, (err) => { 
           done();           
        });        
    });

  describe('/GET products', () => {
      it('it should GET all the products', (done) => {
        chai.request(server)
            .get('/api/products')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});