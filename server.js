const express = require('express')
const { Server } = require('http')
const app = express()
const path = require('path')

app.use(express.urlencoded({extended : true})) //used to parse html data into json

// app.use(express.json()) //used to parse normal json data

app.use(express.static('public')) // this servers all files present inside public folder

let users = [];

app.get('/',(req,res) =>{
     res.sendFile(path.join(__dirname, "public", "signup.html"));
})

app.post('/login',(req,res) =>{
    const {email , password} = req.body;
    if(email==="admin@gmail.com" && password==="1234"){
        res.redirect('/dashboard');
    }
    else{
        res.send('Invalid username or password');
    }
})

app.get('/dashboard',(req,res) =>{
    res.sendFile(path.join(__dirname, "public", "dashboard.html"));
})



app.listen(3000,() =>{
    console.log("server running on 3000");
});




