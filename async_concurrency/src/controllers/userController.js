const {
  getPayments,
  getUsers,
  getOrders,
} = require("../services/user.service");
async function getDashboardData(req, res) {
  try {
    const [users, orders, payments] = await Promise.all([
      getUsers(),
      getOrders(),
      getPayments(),
    ]);
    res.status(200).json({
      users,
      orders,
      payments,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
      error: err,
    });
  }
}

module.exports = getDashboardData;
