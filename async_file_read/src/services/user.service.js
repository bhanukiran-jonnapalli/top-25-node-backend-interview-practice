const path = require("path");
const fs = require("fs").promises;

async function getUsers() {
  const filePath = path.join(__dirname, "../../data/users.json");
  const rawData = await fs.readFile(filePath, "utf-8");

  const paredData = JSON.parse(rawData);

  return paredData.filter((el) => el.age > 25 && el.role === "developer");
}

module.exports = getUsers;

// to read a file we need path of that file so we get the path
// then we read/take the data from it using await and fs.readfile

//then parse it and return
