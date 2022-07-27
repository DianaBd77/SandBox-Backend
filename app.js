require("dotenv").config();
var createError = require("http-errors");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");


var usersRouter = require('./src/module/users/router');
var AuthMiddleware = require('./src/core/middleware/auth');

var app = express();

app.use(cors({origin: ["http://localhost:3000"]}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.post('/login', AuthMiddleware.login);


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
    res.render('error');
})

module.exports = app;
