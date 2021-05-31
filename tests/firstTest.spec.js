/*const express =require('express');
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

console.log("**************** TEST 1 ********************")


*/

/**** get testing ****/

const app =require('../src/app');
const request =require('supertest');
const expect = require('chai').expect;



describe('get requests', () =>{
    it('get course id', () =>{
        request(app)
        .get('/course/1')
        .end((err,res) =>{
            expect(res.body.id).to.be.equal('1');
        });
    });

    //localhost/course?name=mocha

    it('get query param name', (done) =>{
        request(app)
        .get('/course')
        .query({'name' : 'mocha'})
        .expect(200, { id: '1', name: 'mocha'}, done);
    })

});


console.log("**************** TEST 2 ********************")