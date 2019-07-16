'use strict'

const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req,res,next) => {
  res.send('Hello world')
})

app.get('/about', (req,res,next) => {
  res.send('About page')
})

app.get('/details', (req,res,next) => {
  res.send('Details Page')
})

app.get('/*', (req,res,next) => {
  res.send('404 No found')
})

app.listen(port,() => {
  console.log(`Server running at port ${port}`)
})


