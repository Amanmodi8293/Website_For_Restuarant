const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,"public")));

app.get('/hello/:name',(req,res)=>{
    res.send('hello world' + req.params.name);
});
app.get('/hello',(req,res)=>{
    res.send('hello world');
});
app.get('/',(req,res)=>{
    res.send('hello');
});

app.get('/about',(req,res)=>{
    // res.send('about');
    // res.sendFile(path.join(__dirname, 'index.html'))
    res.status(500);
    res.json({"aman":300});

});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})