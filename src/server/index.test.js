import "@babel/polyfill";


const supertest = require('supertest');
const express = require('express');

const app = express();

const request = supertest(app)

app.get('/test', async (req, res) => {
  res.json({message: 'Pass!'})
})

test('Test endPoint', async done => {
  const response = await request.get('/test')

  expect(response.status).toBe(200)
  done()
})
