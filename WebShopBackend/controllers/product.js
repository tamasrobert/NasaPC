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
                                    return JSON.stringify(product._id) === JSON.stringify(prod._id);
                                });

                                if (!contains) {

                                    let oneReview = {
                                        userId: user._id,
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