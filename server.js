// const express = require("express");
// const path = require("path");


// const app = express();

// app.use(express.static(__dirname+'dist'));


// app.get('/',(req,res)=>{
//     // res.sendFile('index.html',{root: 'dist/my-app-demo'});
//     res.sendFile(path.join(__dirname+ '/dist/index.html'));
// });

// //app.listen(process.env.PORT || 8080);
// app.listen(8080,function(err){
//     if(err) throw err;
//     console.log("server is running on port 8080");
// });

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static('./dist/my-app-demo'));


app.get('/',function(req,res){
    res.sendFile('index.html',{root:'dist/my-app-demo'});
});

app.listen(process.env.PORT || 8080);

