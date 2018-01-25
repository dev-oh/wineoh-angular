var express = require('express');
var app = express();
var config = require('./config/config')
app.use(express.static('./dest'));
app.listen(config.PORT,()=>{
    console.log("Running")
})