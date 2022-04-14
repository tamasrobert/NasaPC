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

const product = new Product({
  "name": ":(",
  "category": "phone",
  "description": "test description",
  "price": "69",
  "path":"test",
  "discount":100
});

let error = product.validateSync();
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

        it('should be able to get a session', function (done) {
          agent
            .get('/api/session')
            .end(function (err, res) {
              expect(res).to.have.status(200);
              expect(res.body[0]).to.have.property('email');
              expect(res.body[0].email).to.equal('admin@email.com');
              expect(res.body[0].admin).to.equal(true);
              expect(agent).to.have.cookie('LOCAL_KEY');
              done();
            });
        });

        it('should be able to post a new product', function (done) {

          if (errorCount != 0) {
            throw error.errors;
          }

          agent
            .post('/api/admin/add-product')
            .send(product)
            .end(function (err, res) {
              expect(Object.keys(res.body).length).to.equal(7)
              expect(res).to.have.status(201);
              expect(res.body)
              .to.be.an.instanceof(Object)
              .that.includes.all.keys([ '_id', 'name','price','description','category','path','discount']);
              expect(agent).to.have.cookie('LOCAL_KEY');
              done();
            });
        });

  });
});