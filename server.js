const express = require('express')

const app = express()


const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("This is a trial project for render deployment");
})

app.get('/hello',(req,res)=>{
    res.send("Hello from Sid")
})

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})