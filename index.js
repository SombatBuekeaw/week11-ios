const dotenv = repuire('dotenv')
const express = require('express')
const app = express()

//set path to .env
dotenv.config({ path: './.env' })

const PORT = process.rnv.PORT || 4000;

app.get('/',(req,res)=>{
    res.send('Home page')
})


app.get('/student',(req,res)=>{
    res.send('Adout Page')
})


app.get('/admin',(req,res)=>{
    res.send('Blog Page')
})

app.use((req, res, next) => {
    res.status(404)
    res.send('Page Not Found')
})


app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})