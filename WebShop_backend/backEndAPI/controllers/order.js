// import models
const Order = require('../models/order');
const User = require('../models/user');

// nodemailer to send emails
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

// mongodb for generating ObjectId
const mongodb = require('mongodb');

// custom id maker for generating a random order id/name
const makeid = require('../util/makeid.js');

// FileSystem for file operations
const fs = require('fs');

// instantiate nodemailer-sendgrid
const transport = nodemailer.createTransport(nodemailerSendgrid({apiKey: process.env.SENDGRID_API_KEY}));

// custom price converter ---> 16900 -> 16.900 | 169000 -> 169.000
function priceConverter(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// base64 encode for encoding/sending images through email
function base64_encode(file){
    var bitmap = fs.readFileSync(file);
    return new Buffer.from(bitmap).toString('base64');
}

// payment methods translations
function payment(payment_method) {
    switch(payment_method) {
        case 'online_transfer':
            return 'Online átutalás';
        case 'bank_transfer':
            return 'Banki átutalás';
        case 'cash_on_delivery':
            return 'Utánvét';
    }
}

exports.placeOrder = (req, res) => {
    
    const session = req.cookies['LOCAL_KEY'];
    const id = makeid(6).toUpperCase();

    if(!session) {

        Order.insertMany({id, 'created_at': Date.now(), 'status': 'Feldolgozás alatt...', ...req.body})
        .then(() => {return res.status(200).end()})
        .catch(err => res.send(err));

    } else {
        
        User.findOne({session})
        .then((user) => {

            if(!user) {
                Order.insertMany({id, 'created_at': Date.now(), 'status': 'Feldolgozás alatt...', ...req.body})
                .then(() => {return res.status(200).end()})
                .catch(err => res.send(err));
            }

            Order.insertMany({id, 'userId': new mongodb.ObjectId(user._id), 'created_at': Date.now(), 'status': 'Feldolgozás alatt...', ...req.body})
            .then(() => {

                let = htmlProducts = '<tr><td class="image">Kép</td><td>Termék név</td><td>Összeg</td></tr>';
                let imagePaths = [];
                let index = 1;
                req.body.items.forEach(item => {
                    imagePaths.push(item.product.path);
                    if (index % 2) htmlProducts += '<tr class="strip"><td class="image"><img src="cid:imagecid' + index + '"></td><td>' + 1 + 'x ' + item.product.name + '</td> <td>' + priceConverter(item.product.price*1) + ' Ft</td> </tr>';
                    else htmlProducts += '<tr> <td class="image"><img src="cid:imagecid' + index + '"></td><td>' + 1 + 'x ' + item.product.name + '</td> <td>' + priceConverter(item.product.price*1) + ' Ft</td> </tr>';
                    index++;                });
                    htmlProducts += '<tr class="total"> <td></td> <td><b>Összesen</b></td> <td><b>' + priceConverter(req.body.total_price) + ' Ft</b></td> </tr>'

                let files = [];
                index = 1;
                imagePaths.forEach(imagePath => {
                    files.push({
                        'filename': imagePath,
                        'content': base64_encode('./public/images/products/' + imagePath),
                        'type': 'image/jpg',
                        'cid': 'imagecid' + index,
                        'disposition': 'inline',
                    });
                    index++;
                });

                transport.sendMail({
                    from: 'tamas.robert1@students.jedlik.eu',
                    to: 'tamasrobert00@gmail.com',
                    subject: 'Sikeres rendelés feladás!',
                    html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> <style> .container { background-color: #1d1d30; width: 800px; color: #fff; margin: 0 auto 0 auto; } h1,h3 { text-align: center; } h1 { padding-top: 30px; } .pt { padding-top: 30px; padding-left: 40px; text-align: start; } .pb { padding-bottom: 40px; } span { display: block; padding: 3px 5px 3px 40px; color: #fff; } table { width: 100%; padding: 0px 30px 30px 30px; margin: 0 auto 0 auto; } table tr { background-color: #151522; } table td { text-align: center; padding: 5px; } img { width: 48px; height: 48px; } .image { width: 48px; padding: 0; margin: 0; } .strip {background-color: #181827;} .total{background-color: #292945;} </style> </head> <body> <div class="container"> <h1>Rendelését sikeresen rögzítettük!</h1> <h3>Kedves ' + req.body.last_name + ' ' + req.body.first_name + '!</h3> <span>Köszönjük hogy a mi webshoppunkat választotta!</span> <span>Amennyiben rendelésed során az előre utalást választottad, a vételárat a következő e-mailben elküldött díjbekérő alapján tudod elutalni, közleménybe a pontos rendelési azonosítót írva: <b>' + id + '</b> Bankszámlaszámunk: <b>12345678-12345678-12345678</b> Számlatulajdonos: <b>Webshop Kft.</b> Fontos! Ha nem kaptál díjbekérőt, keresd ügyfélszolgálatunkat az utalás előtt!</span> <h3>Az ön rendelési azonosítója: ' + id + '</h3> <h3 class="pt">Személyes adatok:</h3> <table> <tr> <td>Megrendelő:</td> <td>' + req.body.last_name + ' ' + req.body.first_name + '</td> </tr> <tr class="strip"> <td>E-mail cím:</td> <td>' + req.body.email + '</td> </tr> <tr> <td>Értesítési telefonszám:</td> <td> ' + req.body.phone_number + ' </td> </tr> <tr class="strip"> <td>Számlázási cím:</td> <td>' + req.body.billing_address + '</td> </tr> <tr> <td>Szállítási cím:</td> <td>' + req.body.shipping_address +'</td> </tr> </table> <h3 class="pt">Rendelt termékek:</h3> <table class="products">' + htmlProducts + '</table> <span>Választott fizetési mód: <b>' + payment(req.body.payment_method) + '</b></span> <span>Megrendelés időpontja: <b>' + (Date(req.body.created_at)) + '</b></span> <span class="pb">Átvételkor fizetendő: <b>' + ((req.body.payment_method == 'cash_on_delivery') ? priceConverter(req.body.total_price) : '0') + ' Ft</b></span> </div> </body> </html>',
                    attachments: files
                });

                return res.status(200).end();
            })
            .catch(err => res.send(err));
        })
        .catch(err => res.send(err))
    }
}

