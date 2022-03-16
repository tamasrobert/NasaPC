const mongoose = require('mongoose');
const Product = require('../models/product');
const Order = require('../models/product');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  resetToken: String,
  resetTokenExpiration: Date,
  isAdmin: Boolean,

  cartTotalPrice: {type: Number, default: 0},

  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: { type: Number, required: true },
      }
    ],
    
  },
});

userSchema.methods.addToCart = function(product) {
  const productIndex = this.cart.items.findIndex(cp => {
    return cp.productId.toString() === product._id.toString();
  });
  let newQuantity = 1;
  const updatedProducts = [...this.cart.items];

  if (productIndex >= 0) {
    newQuantity = this.cart.items[productIndex].quantity + 1;
    updatedProducts[productIndex].quantity = newQuantity;
  } else {
    updatedProducts.push({
      productId: product._id,
      quantity: newQuantity
    });
  }
  const updatedProductsList = {
    items: updatedProducts,
  };
  this.cart = updatedProductsList;
  //console.log(product.price)
  this.cartTotalPrice += +product.price;
  return this.save();
};


userSchema.methods.removeFromCart = function(product, productId) {
  const quantity = this.cart.items.find(x => x.productId == productId).quantity;
  const price = product.price;

  const updatedProducts = this.cart.items.filter(item => {
    return item.productId.toString() !== productId.toString();
  });

  this.cart.items = updatedProducts;

  this.cartTotalPrice -= +(price*quantity);
  return this.save();
};

userSchema.methods.clearCart = function() {
  this.cart = { items: [] };
  this.cartTotalPrice = 0;
  return this.save();
};

module.exports = mongoose.model('User', userSchema);