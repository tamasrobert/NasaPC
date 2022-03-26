const { OrdersCreateRequest } = require('@paypal/checkout-server-sdk/lib/orders/lib');
const Order = require('../models/order');
const User = require('../models/user');

exports.getOrders = (req, res, next) => {
    const session = req.cookies['LOCAL_KEY'];
    if(!session) {
        res.statusMessage = "No token found.";
        res.sendStatus(200);
    } else {
        User.findOne({session})
        .then((user) => {
            if(user) {
                Order.find({'userId': user._id}).toArray()
                .then((orders) => {
                    res.send(JSON.stringify(orders))
                })
                .catch((error) => {
                    res.send(JSON.stringify(error))
                })

            } else {
                res.statusMessage = "No token found.";
                res.sendStatus(200);
            }
        })
        .catch((error) => {
            res.send(error);
        })
    }
};