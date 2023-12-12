const express = require('express')
const path = require('path')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8082;// neu port khong co thi chay o cong 8082
const hostname = process.env.HOST_NAME;

// app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World 12  !')
})

app.get('/text', (req, res) => {
    // res.send('<h1>Hello World!</h1>')
    res.render('sample.ejs')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})