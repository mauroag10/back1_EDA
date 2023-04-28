const express = require('express')
const app = express ()
const route  = require ('./routes/index.routes')
const path = require('path')

app.use(route)

app.use(express.static(path.join(__dirname,'../public')))
app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.listen(3000, ()=> {
    console.log('Esperando conexiones...')
})

