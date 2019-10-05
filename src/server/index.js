const express = require('express')
const path = require('path')

const app = express()

const port = 3000

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'template'))
app.use(express.static(path.join(__dirname, '../client')))
app.get('/', (req, res) => {
  res.render('index')  
})

app.listen(port, () => {console.log(`Server listening on port ${port}`)})
