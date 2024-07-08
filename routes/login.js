//login.js------------->file
const express = require('express')
const router = express.Router();
router.get('/login',(req,res,next)=>{
    res.send(`<H1>Login here</h1>`)
})
module.exports=router;