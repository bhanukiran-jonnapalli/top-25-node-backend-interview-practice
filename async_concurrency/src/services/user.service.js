const path = require("path");
const fs = require("fs").promises;

async function getUsers() {
  const filePath = path.join(__dirname, "../../data/users.json");

  const rawData = await fs.readFile(filePath, "utf-8");

  return JSON.parse(rawData);
}

async function getOrders() {
  const filePath = path.join(__dirname, "../../data/orders.json");
  const rawData = await fs.readFile(filePath, "utf-8");

  return JSON.parse(rawData);
}

function getPayments() {
  const filePath = path.join(__dirname, "../../data/payments.json");

  return fs.readFile(filePath, "utf-8").then((rawData) => {
    return JSON.parse(rawData);
  });
}

module.exports = { getUsers, getOrders, getPayments };
