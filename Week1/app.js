// Coming back later (prob wk 2)

console.log("Week-1 ");

let express = require('express');
var app = express();

//respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res){
res.send('hello world');
})

app.listen(3000)

const express= require("express");
const res= require("express/ib/response");
const app= express();
const addTwoNumber= (n1,n2) => 
    {
        return n1+n2;
    }

app.get("/addTwoNumber", (req,res)=> 
    {
        const n1= parseInt(req.query.n1);
        const n2= parseInt(req.query.n2);
        const result = addTwoNumber(n1,n2);
    });

console.log(addTwoNumber(19,12));

const port=3040;
app.listen(port,()=> 
{
    console.log("hello I'm listening to port" + port);
}
)

