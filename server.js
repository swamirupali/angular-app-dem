const express = require("express");
const path = require("path");


const app = express();

app.use(express.static('./dist/my-app-demo'));


app.get('/',(req,res)=>{
    res.sendFile('index.html',{root: 'dist/my-app-demo'});
});

app.listen(process.env.PORT || 8080);

