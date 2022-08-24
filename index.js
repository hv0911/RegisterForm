const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./UserRouter.js');
const mongoose = require('mongoose');

// connecting to database

mongoose.connect('mongodb+srv://HARSHV:hv09.mongodb@cluster0.q3y2csm.mongodb.net/RegisterForm?retryWrites=true&w=majority')
.then(con => { console.log(`Database Connected: mongodb`) })
.catch((err) => console.log(err))


const Port = process.env.PORT || 4000;

// using middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("images"));
app.use(router);

// setting the template engine
app.set("view engine","hbs");


app.get('/',(req,res)=>{
   res.render("index");
});








app.listen(Port,()=>{
   console.log(`app is running on 4000`);
})