const express=require("express");

const app =express();

app.get("/",(request,response)=>{
response.send('<h1 style="background-color:cyan;">Completed</h1>');
});


app.get("/home",(request,response)=>{
response.send('<h1 style="background-color:cyan;">I came to my home page</h1>');
});

app.get("/about",(request,response)=>{
response.send('<h1 style="background-color:cyan;">This Website is created by : Pravesh rathore</h1><h1 style="background-color:cyan;">He is an artisit</h1>');
});


app.listen(3000,()=>{
    console.log("completed");
})

