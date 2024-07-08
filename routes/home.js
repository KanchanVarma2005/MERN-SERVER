//home.js------------->file
const express = require('express')
const router = express.Router();
router.get('/home',(req,res,next)=>{
    res.send(`<H1>This is your home page API</h1>`)
})
module.exports=router;