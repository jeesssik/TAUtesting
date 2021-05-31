const express =require('express');
const request =require('supertest');
const expect = require('chai').expect;

const app = express();

app.get('/first', (err,res) =>{
    res.status(200).json({"ok": "response"});
}); 

describe('First test', () =>{
  it('OK response', () =>{
      request(app)
      .get('/first')
      .end((err,res) =>{
          expect(res.statusCode).to.be.equal(200);
      })
  });
  
  it('Mocky OK Response',() =>{
      request('https://run.mocky.io')
      .get('/v3/368c3500-9c3f-4354-b856-6ed19c24aa95')
      .expect(200, "done");
  });
})
