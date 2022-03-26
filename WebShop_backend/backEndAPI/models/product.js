const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    category: String,
    price: String,
    description: String,
    path: String,
});

module.exports = mongoose.model('Product', productSchema, 'products');