// express -> instantiation
const express = require("express")
const app = express()

// CORS
const cors = require('cors');

// mongoose -> schemas
const mongoose = require('mongoose');

// cookie-parser
const cookieParser = require("cookie-parser");

// .env variables - .\WebShopProject\WebShop_backend\backEndAPI\.env
require("dotenv").config();

// models
//const User = require('./models/user');

// middlewares -> base
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(cors({origin: 'http://localhost:' + process.env.FRONTEND_PORT, credentials: true}));
app.use(cookieParser());

// PayPal payment method requirements
const paypal = require("@paypal/checkout-server-sdk")
const Environment = paypal.core.SandboxEnvironment;
const paypalClient = new paypal.core.PayPalHttpClient(
  new Environment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
  )
)

// middlewares -> routes
//app.use(adminRoutes);
//app.use(authenticationRoutes);
//app.use(productsRoutes);
//app.use(orderRoutes);

// mongodb base
const CONNECTION_STRING = process.env.CONNECTION_STRING;

// const store = new MongoDBStore({
//     uri: CONNECTION_STRING,
//     collection: 'sessions'
// });
// mongoose.set('useFindAndModify', false);

// app.use((req, res, next) => {
//     if (!req.session.user) {
//         return next();
//     }
//     User.findById(req.session.user._id)
//         .then(user => {
//             req.user = user;
//             next();
//         })
//         .catch(err => { console.log(err); res.redirect('/login') });
// });


// middlewares


app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn
    if (req.session.user) { res.locals.isAdmin = req.session.user.isAdmin }
    else { res.locals.isAdmin = false }
    next()
})

//app.use('/admin', adminRoutes);
//app.use(shopRoutes);
//app.use(authRoutes);

app.get('/api/echo/:message', (req,res) => {
    console.log("echo: " + req.params.message);
    res.send(req.params.message);
  }) 
  
  app.post("/create-order", async (req, res) => {
    const request = new paypal.orders.OrdersCreateRequest()
    const total = req.body.items.reduce((sum, item) => {
      return sum + storeItems.get(item.id).price * item.quantity
    }, 0)
    request.prefer("return=representation")
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "HUF",
            value: total,
            breakdown: {
              item_total: {
                currency_code: "HUF",
                value: total,
              },
            },
          },
          items: req.body.items.map(item => {
            const storeItem = storeItems.get(item.id)
            return {
              name: storeItem.name,
              unit_amount: {
                currency_code: "HUF",
                value: storeItem.price,
              },
              quantity: item.quantity,
            }
          }),
        },
      ],
    })
  
    try {
      const order = await paypalClient.execute(request)
      res.json({ id: order.result.id })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  })
  
  var reqData = [];
  
  app.get("/api/success", (req, res) => {
    res.send(reqData);
  });
  
  app.post("/api/success", (req, res) => {
    reqData = req.body;
  });

// start server -> mongodb connection
mongoose
    .connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(process.env.BACKEND_PORT, function (error) {
            if (error) throw error
            console.log("Back-end server started on port: " + process.env.BACKEND_PORT)
        })
    })
    .catch(err => {
        console.log(err);
    });


module.exports = app;
