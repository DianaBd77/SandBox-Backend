require("dotenv").config();
var createError = require("http-errors");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");


var accountRouter = require('./src/module/account/router');
var usersRouter = require('./src/module/users/router');
var pollRouter = require('./src/module/poll/router');


var app = express();

app.use(cors({origin: ["http://localhost:3000"]}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/account', accountRouter);
app.use('/users', usersRouter);
app.use('/poll', pollRouter);



//catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
})


//error handler
app.use((err, req, res, next) =>{
    //set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //render the err page
    res.status(err.status || 500);
    console.log('err :>> ', err);
    res.send(err);
})

module.exports = app;
