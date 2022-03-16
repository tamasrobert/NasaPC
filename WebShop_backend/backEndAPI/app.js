// basic requirements
var path = require('path');
var express = require('express');
const bodyParser = require('body-parser');
const app = express();

// .env variables - .\WebShopProject\WebShop_backend\backEndAPI\.env
// MONGOURI
// SendGrid API_KEY
require("dotenv").config();

// webshop back-bone
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// store errors - sessions
const flash = require('connect-flash');

// password hash
const bcrypt = require('bcryptjs');

// models
//const User = require('./models/user');

// error controller
//const errorController = require('./controllers/error');

// mongodb base
const MONGODB_URI = process.env.MONGOURI;

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});
mongoose.set('useFindAndModify', false);

// routes
//const adminRoutes = require('./routes/admin');
//const shopRoutes = require('./routes/shop');
//const authRoutes = require('./routes/auth');

// basic authentication defaults
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
        store: store
    })
);

app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {console.log(err); res.redirect('/login')});
});

// middlewares
app.use(flash());
app.use(express.json());

app.use((req,res,next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn
    if(req.session.user) {res.locals.isAdmin = req.session.user.isAdmin}
    else {res.locals.isAdmin = false}
    next()
})

// dealing with CORS
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization')
    next()
})

//app.use('/admin', adminRoutes);
//app.use(shopRoutes);
//app.use(authRoutes);
//app.use(errorController.get404);

// mongodb connection
mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(3000);
        console.log("CONNECTED TO MONGODB")
    })
    .catch(err => {
        console.log(err);
    });


module.exports = app;
