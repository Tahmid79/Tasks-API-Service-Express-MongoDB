var express  = require('express') ;
var path = require('path') ;
var bodyParser = require('body-parser') ;

var index = require('./routes/index') ;
var tasks = require('./routes/tasks') ;

const cors = require('cors');

var port  = 3000 ;

var app = express() ;

app.use(cors());



app.use(function (req , res , next) {
    res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Allow-Headers: X-Custom-Header, Origin,Upgrade-Insecure-Requests') ;
    next() ;
});



//View Engine
app.set('views' , path.join(__dirname , 'views')) ;
app.set('view engine' , 'ejs') ;
app.engine('html' , require('ejs').renderFile) ;

//Set static folder
app.use(express.static(path.join(__dirname , 'client'))) ;

//Body Parser MiddleWare
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended : false })) ;

app.use('/' , index ) ;
app.use('/api' , tasks) ;

app.listen(port ,  function(){
    console.log('Server started on port ' + port) ;
}) ;


