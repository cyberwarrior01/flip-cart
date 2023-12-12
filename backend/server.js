// const express = require('express')
import express from 'express'
const app = express()
// const router = require('./src/Routes/Products.routes')
import router from './src/Routes/Products.routes.js'
// const dotenv = require('dotenv')
import dotenv from 'dotenv'
import conn from './src/Config/conDb.js';
dotenv.config();

conn();

app.get('/',(req,res)=>{
    res.send('hii')
})


app.use('/',router)
const port = process.env.PORT
app.listen(port,()=>{
    console.log("app is listning on " , port);
}
)
