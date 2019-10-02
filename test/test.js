process.env.NODE_ENV = 'test';

const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');

describe('Unit tests for the Leslie Knope Quotes API', function () {

  it('should return OK 200 status', function() {
    return request(app)
      .get('/')
      .then(function(response){
          assert.equal(response.status, 200);
      })
  });

  it('should return a random quote', function() {
    return request(app)
      .get('/quotes')
      .then(function(response){
          assert.equal(response.status, 200);
          expect(response.type).to.equal('application/json');
          expect(response.body).to.not.equal('');
      })
  });

  it('should return 3 random leslie knope quotes', function(){
    return request(app)
    .get('/quotes/3')
    .then(function(response){
        assert.equal(response.status, 200);
        expect(response.type).to.equal('application/json');
        expect(response.body).to.have.length(3);
    })
  });

  it('should return 200 and send back an html', function() {
    return request(app)
      .get('/invalid')
      .then(function(response){
        assert.equal(response.status, 200);
        expect(response.type).to.equal('text/html');
    })
  });
});