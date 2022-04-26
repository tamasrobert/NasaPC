const Product = require('../models/product');
const User = require('../models/user');

exports.getAllProducts = (req, res) => {

    Product.find()
        .then(products => res.json(products))
        .catch(() => res.status(500).json({ "error": "Unexpected error!" }))

};

exports.getProductById = (req, res) => {

    let _id = req.params.productId;

    Product.findOne({ _id })
        .then(product => {
            if (product != null) res.status(200).json(product)
            else res.status(404).json({ "error": "Product not found!" })
        })
        .catch(() => res.status(404).json({ "error": "Product not found!" }))

};

exports.postReview = (req, res) => {

    const session = req.cookies['LOCAL_KEY'];
    const _id = req.params.productId;

    if (session) {

        User.findOne({ session })
            .then((user) => {

                if (user) {

                    Product.findById(_id)
                        .then(product => {

                            if (product) {

                                var productReviews = [...product.reviews];
                                var contains = productReviews.some(prod => {
                                    return JSON.stringify(user._id) === JSON.stringify(prod.userId);
                                });

                                if (!contains) {

                                    let oneReview = {
                                        userId: user._id,
                                        email: user.email,
                                        rating: req.body.rating,
                                        comment: req.body.comment
                                    }
                                    productReviews.push(oneReview);

                                    Product.updateOne({ _id }, { reviews: productReviews })
                                        .then(() => { return res.status(200).json({ "message": "Review posted!" }) })
                                        .catch((error) => { return res.status(500).json({ "error": "Failed posting review!" }) })
                                }
                                else {
                                    return res.status(400).json({ "error": "Failed posting review! You have already review this product!" })
                                }
                            }
                            else { res.status(404).json({ "error": "Product not found!" }) }
                        })
                        .catch(err => { res.status(404).json({ "error": "Product not found!" }) });
                }
            })
            .catch((error) => {
                res.status(404).json({ "error": "User not found!" });
            })
    } else {
        res.status(401).json({ "error": "No session!" });
    }
};

exports.deleteReview = (req, res) => {

    const session = req.cookies['LOCAL_KEY'];
    const _id = req.params.productId;

    if (session) {

        User.findOne({ session })
            .then((user) => {

                if (user) {

                    Product.findOne({ _id })
                        .then(product => {


                            let productExists = false;
                            if (product) productExists = true

                            let productInReviewsExists = false;

                            for (let index = 0; index < product.reviews.length; index++) {

                                if (String(user._id) === String(product.reviews[index].userId)) {
                                    productInReviewsExists = true;
                                    break;
                                }
                            }

                            if (productExists && productInReviewsExists) {
                                var filteredReviews = product.reviews.filter(function (value, index, arr) {
                                    return (String(value.userId) != String(user._id));
                                });

                                Product.updateOne({ _id }, { $set: { reviews: filteredReviews } }).then(response => {
                                    return res.status(200).json({ "message": "Reviews have been updated." })
                                })
                                    .catch(error => { return res.status(500).json({ "message": "Unexpected error!" }) })
                            }
                            else {

                                if (productExists && !productInReviewsExists)
                                    return res.status(404).json({ "error": "Review not found!" })
                                else
                                    return res.status(404).json({ "error": "Product not found!" })

                            }

                        })
                        .catch(error => {console.log(error); res.status(404).json({ "error": "Unexpected error!" }) })
                }
            })
            .catch((error) => {
                return res.status(404).json({ "error": "Unexpected error!" });
            })
    } else {
        res.status(401).json({ "error": "No session!" });
    }
};