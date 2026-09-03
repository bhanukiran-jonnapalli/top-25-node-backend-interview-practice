const getUsers = require("../services/user.service");

async function userController(req, res) {
  const users = await getUsers();
  res.status(200).json(users);
}

module.exports = { userController };
