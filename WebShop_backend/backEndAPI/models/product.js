const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name required"]
    },
    category: {
        type: String,
        required: [true, "Category required"]
    },
    price: {
        type: String,
        required: [true, "Price required"]
    },
    description: {
        type: String,
        required: [true, "Description required"]
    },
    path: String,
    discount: {
        type: Number,
        validate: {
            validator: function (d) {
                return d >= 0 && d <= 100;
            },
            message: "Discount must be between 0 and 100 (including 0 and 100)",
        }
    }
}, { versionKey: false });

module.exports = mongoose.model('Product', productSchema, 'products');