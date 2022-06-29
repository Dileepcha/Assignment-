const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
//To use bootstrap
app.use(express.static(__dirname +'/public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/quote', (req, res) => {
    res.render('quote')
  })

  app.get('/list', (req, res) => {
    res.render('list')
  })

  app.get('/table', (req, res) => {
    res.render('table')
  })

  app.get('/striped', (req, res) => {
    res.render('striped')
  })

  app.get('/card', (req, res) => {
    res.render('card')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})