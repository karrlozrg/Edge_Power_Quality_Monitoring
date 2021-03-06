var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var session = require("express-session");


var indexRouter = require('./routes/index');

var app = express();

//****************OpcUA test****************************
//custom info change for different servers and NodeIds
var Edge= require('./EdgeOpcUAClient');

const endpointUrl= "opc.tcp://md1y180c:62541/Quickstarts/ReferenceServer";
const nodeId1="ns=2;s=Motor.Gauge";
const nodeId2="ns=2;s=Carrier1.Position";

Edge.connect(endpointUrl,1000,function(args) {
    console.log("Edge!! voltage: "+args.EdgeData.voltage+", ampere: "+ args.EdgeData.current);
    //console.log("Edge"+args.EdgeData.toString());
},nodeId1,nodeId2)
//****************End test****************************


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error');
});

module.exports = app;
