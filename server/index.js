const axios = require('axios')
const express = require('express')
const cors = require('cors')
const { tempList, farToCel, calToFar, currencyList } = require('./data')

const app = express() 
app.use(express.json())
app.use(cors())

app.post('/temp', (req,res) => {
    let result = 0

    if(req.body.from === req.body.to) result = req.body.measure
    else if(req.body.from === "fahrenheit") result = (Math.round(farToCel(req.body.measure) * 100) / 100).toFixed(2)
    else if(req.body.from === "celsius") result = (Math.round(calToFar(req.body.measure) * 100) / 100).toFixed(2)
    
    res.send({result})
})

app.get('/temp', (req,res) => {
    res.send(tempList)
}) 

app.post('/currency', (req,res) => {
    let result = 0
    const from = req.body.from
    const to = req.body.to
    const amount = req.body.amount
    axios.get(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`)
    .then(ress=> {
        result =  (Math.round(ress.data.result * 100) / 100).toFixed(2)
        res.send({result})
    })
    .catch(err=>{res.send({result})})
})

app.get('/currency', (req,res) => {
    res.send(currencyList)
})


const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log(`Listening at port : ${PORT}`)