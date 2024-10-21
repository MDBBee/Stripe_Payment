const stripe = require("stripe");

const stripeController = async (req, res) => {
  const { purchase, total_amount, shipping_fee } = req.body;

  const calculateOrderAmount = () => {};
};

module.exports = stripeController;
