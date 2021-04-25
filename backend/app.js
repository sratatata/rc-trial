const express = require('express')
const app = express()
const port = 3000

app.get('/organization', (req, res) => {
  let organizations = [{
    name : "HPI",
    description : "test"
  }]
  res.setHeader("Content-Type","application/json")
  res.send(organizations)   
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})