const express = require('express')
const app = express()
const router = require('./routes/tasks')

const port = process.env.PORT||3000

app.use(express.urlencoded({extended:true}))
app.use('/',router)
app.listen(port,()=>{
    console.log('servidor rodando na porta 3000')
})
