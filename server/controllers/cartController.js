const Cart = require("../models/Cart");

async function addCart(req, res) {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function updateCart(req, res) {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function deleteCart(req, res) {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted....")
    } catch (err) {
        res.status(500).json(err)
    }
}

async function getUserCart(req, res) {
    try {
        const cart = await Cart.findOne(req.params.userId);
        res.status(200).json(cart)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function getAllCarts(req, res) {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    addCart,
    updateCart,
    deleteCart,
    getUserCart,
    getAllCarts,
}
