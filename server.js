var express = require('express');

var path = require('path');

var bodyParser= require('body-parser');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/static')))

app.get('/',function(request,response){

    response.render('index');
})

app.post('/frmData',function(request,response){
    console.log(request.body.name[0])
    content=request.body
    response.render("results",{content:content})
})


app.listen(5000,function(){
    console.log("listening to port 5000");
})