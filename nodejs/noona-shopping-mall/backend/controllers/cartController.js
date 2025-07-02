const mongoose = require("mongoose");

const Cart = require("../models/Cart");
const cartController = {};

// addItemToCart
cartController.addItemToCart = async (req, res) => {
  try {
    const { userId } = req;
    const { productId, size, qty } = req.body;
    const objectProductId = new mongoose.Types.ObjectId(productId);

    // 유저를 가지고 카트 찾기
    let cart = await Cart.findOne({ userId });

    // 유저가 만든 카트가 없다면 만들어주기
    if (!cart) {
      cart = new Cart({ userId });
      await cart.save();
    }
    // 이미 카트에 들어가있는 아이템이냐? productId, size
    const existItem = cart.items.find((item) => {
      return item.productId.equals(objectProductId) && item.size === size;
    });

    // 카트에 들어가있으면 ("이미 아이템이 카트에 있습니다");
    if (existItem) {
      throw new Error("아이템이 이미 카트에 담겨 있습니다!");
    }

    // 아니면 카트에 아이템을 추가
    cart.items = [...cart.items, { productId, size, qty }];
    await cart.save();

    return res
      .status(200)
      .json({ status: "success", data: cart, cartItemQty: cart.items.length });
  } catch (err) {
    return res.status(400).json({ status: "fail", message: err.message });
  }
};

// getCart
cartController.getCart = async (req, res) => {
  try {
    const { userId } = req;
    const cart = await Cart.findOne({ userId }).populate({
      path: "items",
      populate: {
        path: "productId",
        model: "Product",
      },
    });

    return res.status(200).json({ status: "success", data: cart.items });
  } catch (err) {
    return res.status(400).json({ status: "fail", message: err.message });
  }
};

// getCartQty
cartController.getCartQty = async (req, res) => {
  try {
    const { userId } = req;
    const cart = await Cart.findOne({ userId });
    if (!cart) throw new Error("Not Exist Cart.");
    return res.status(200).json({ status: 200, qty: cart.items.length });
  } catch (err) {
    return res.status(400).json({ status: "fail", message: err.message });
  }
};

// editCartItem
cartController.editCartItem = async (req, res) => {
  try {
    const { userId } = req;
    const { id } = req.params;
    const { qty } = req.body;

    const cart = await Cart.findOne({ userId }).populate({
      path: "items",
      populate: {
        path: "productId",
        model: "Product",
      },
    });
    if (!cart) throw new Error("There is no cart for this user");

    const index = cart.items.findIndex((item) => item._id.equals(id));
    if (index === -1) throw new Error("Can not find item");
    cart.items[index].qty = qty;
    await cart.save();

    return res.status(200).json({ status: 200, data: cart.items });
  } catch (error) {
    return res.status(400).json({ status: "fail", message: err.message });
  }
};

// deleteCartItem
cartController.deleteCartItem = async (req, res) => {
  try {
    const { userId } = req;
    const { id } = req.params;

    const cart = await Cart.findOne({ userId });
    cart.items = cart.items.filter((item) => !item._id.equals(id));
    await cart.save();

    return res
      .status(200)
      .json({ status: 200, cartItemQty: cart.items.length });
  } catch (err) {
    return res.status(400).json({ status: "fail", message: err.message });
  }
};

module.exports = cartController;
