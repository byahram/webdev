const Order = require("../models/Order");
const { randomStringGenerator } = require("../utils/randomStringGenerator");
const productController = require("./productController");

const orderController = {};
const PAGE_SIZE = 5;

orderController.createOrder = async (req, res) => {
  try {
    // 프론트엔드에서 데이터 보낸거 받아오기
    // userId, totalPrice, shipTo, contact, orderList
    const { userId } = req;
    const { shipTo, contact, totalPrice, orderList } = req.body;

    // 재고 확인 & 재고 업데이트
    const insufficientStockItems = await productController.checkItemListStock(
      orderList
    );

    // 재고가 충분하지 않는 아이템이 있었다 -> 에러
    if (insufficientStockItems.length > 0) {
      const errorMessage = insufficientStockItems.reduce(
        (total, item) => (total += item.message),
        ""
      );
      throw new Error(errorMessage);
    }

    // order를 만들자!
    const newOrder = new Order({
      userId,
      totalPrice,
      shipTo,
      contact,
      items: orderList,
      orderNum: randomStringGenerator(),
    });
    await newOrder.save();
    // save 후에 카트를 비워주기
    return res
      .status(200)
      .json({ status: "success", orderNum: newOrder.orderNum });
  } catch (err) {
    return res.status(400).json({ status: "fail", message: err.message });
  }
};

// getOrder
orderController.getOrder = async (req, res, next) => {
  try {
    const { userId } = req;

    const orderList = await Order.find({ userId: userId }).populate({
      path: "items",
      populate: {
        path: "productId",
        model: "Product",
        select: "image name",
      },
    });
    const totalItemNum = await Order.find({ userId: userId }).countDocuments();
    const totalPageNum = Math.ceil(totalItemNum / PAGE_SIZE);

    return res
      .status(200)
      .json({ status: "success", data: orderList, totalPageNum });
  } catch (err) {
    return res.status(400).json({ status: "fail", message: err.message });
  }
};

// getOrderList
orderController.getOrderList = async (req, res) => {
  try {
    let { page, orderNum } = req.query;

    let cond = {};
    if (orderNum) {
      cond = {
        orderNum: { $regex: orderNum, $options: "i" },
      };
    }

    const orderList = await Order.find(cond)
      .populate("userId")
      .populate({
        path: "items",
        populate: {
          path: "productId",
          model: "Product",
          select: "image name",
        },
      })
      .skip((page - 1) * PAGE_SIZE)
      .limit(PAGE_SIZE);

    const totalItemNum = await Order.find(cond).countDocuments();
    const totalPageNum = Math.ceil(totalItemNum / PAGE_SIZE);

    return res
      .status(200)
      .json({ status: "success", data: orderList, totalPageNum });
  } catch (err) {
    return res.status(400).json({ status: "fail", message: err.message });
  }
};

// updateOrder
orderController.updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      id,
      { status: status },
      { new: true }
    );
    if (!order) throw new Error("Can't find order");

    return res.status(200).json({ status: "success", data: order });
  } catch (err) {
    return res.status(400).json({ status: "fail", message: err.message });
  }
};

module.exports = orderController;
