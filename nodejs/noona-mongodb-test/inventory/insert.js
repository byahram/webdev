const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("noona-testDB");
  const inventory = database.collection("inventory");

  //   [HW] 1. insertOne
  const hwUserData = await inventory.insertOne({
    item: "canvas",
    qty: 100,
    tags: ["cotton"],
    size: { h: 28, w: 35.5, uom: "cm" },
  });
  console.log("hwUserData --> ", hwUserData);

  //   [HW] 2. insertMany
  const inventoryList = [
    {
      item: "journal",
      qty: 25,
      tags: ["blank", "red"],
      size: { h: 14, w: 21, uom: "cm" },
    },
    {
      item: "mat",
      qty: 85,
      tags: ["gray"],
      size: { h: 27.9, w: 35.5, uom: "cm" },
    },
    {
      item: "mousepad",
      qty: 25,
      tags: ["gel", "blue"],
      size: { h: 19, w: 22.85, uom: "cm" },
    },
  ];
  const inventoryListResult = await inventory.insertMany(inventoryList);
  console.log("inventoryListResult --> ", inventoryListResult);
}

run();
