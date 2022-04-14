let mongoose = require("mongoose");

let app = require('../app');
let chai = require('chai');
let chaiHttp = require('chai-http');
var _ = require('lodash');

const Product = require('../models/product');

const { expect } = require("chai");
let should = chai.should();

let cookie;


chai.use(chaiHttp);
const agent = chai.request.agent(app);

const badProd = new Product({
  "name": ":(",
  "category": "phone",
  "description": "test description",
  "price": "69",
  "path":"test",
  "discount":100
});

let error = badProd.validateSync();
let errorCount = 0;
if (error) { errorCount = _.size(error.errors)}

describe('test', () => {


  describe('WebShopBackend API Tests', () => {

        it('should be able to login', function (done) {
          agent
            .post('/api/login')
            .send({ email: 'admin@email.com', password: 'admin' })
            .end(function (err, res) {
              expect(res).to.have.status(200);
              expect(agent).to.have.cookie('LOCAL_KEY');
              done();
            });
        });



      



  });
});