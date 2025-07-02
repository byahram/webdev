const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("noona-testDB");
  const inventory = database.collection("inventory");

  //   [HW] 3. inventory에 저장된 모든 데이터 읽어오기
  const findAll = await inventory.find({}).toArray();
  console.log("findAll --> ", findAll);

  //   [HW] 4. inventory에 해당데이터를 먼저 넣고 status가 D인 데이터 찾기
  const inventoryList = [
    {
      item: "journal",
      qty: 25,
      size: { h: 14, w: 21, uom: "cm" },
      status: "A",
    },
    {
      item: "notebook",
      qty: 50,
      size: { h: 8.5, w: 11, uom: "in" },
      status: "A",
    },
    {
      item: "paper",
      qty: 100,
      size: { h: 8.5, w: 11, uom: "in" },
      status: "D",
    },
    {
      item: "planner",
      qty: 75,
      size: { h: 22.85, w: 30, uom: "cm" },
      status: "D",
    },
    {
      item: "postcard",
      qty: 45,
      size: { h: 10, w: 15.25, uom: "cm" },
      status: "A",
    },
  ];
  const insertInventoryList = await inventory.insertMany(inventoryList);
  console.log("insertInventoryList --> ", insertInventoryList);

  const findStatusD = await inventory.find({ status: "D" }).toArray();
  console.log("findStatusD --> ", findStatusD);

  //   [HW] 5. status가 'A’이고 qty가 50인 데이터 찾기
  const data5 = await inventory.find({ status: "A", qty: 50 }).toArray();
  console.log("data5 --> ", data5);

  //   [HW] 6. status가 A 또는 B인 데이터 찾기
  const data6 = await inventory
    .find({
      status: { $in: ["A", "B"] },
    })
    .toArray();
  console.log("data6 --> ", data6);

  //   [HW] 7. status가 A이고 qty가 30보다 작은 데이터 찾기
  const data7 = await inventory
    .find({
      status: "A",
      qty: { $lt: 30 },
    })
    .toArray();
  console.log("data7 --> ", data7);

  //   [HW] 8. status가 A이거나 qty가 30보다 작은 데이터 찾기
  const data8 = await inventory
    .find({
      $or: [{ status: "A" }, { qty: { $lt: 30 } }],
    })
    .toArray();
  console.log("data8 --> ", data8);

  //   [HW] 9. size에 uom이 in 인 데이터 찾기
  const data9 = await inventory
    .find({
      "size.uom": "in",
    })
    .toArray();
  console.log("data9 --> ", data9);

  //   [HW] 10. size에 h가 10을 초과하는 데이터 찾기
  const data10 = await inventory
    .find({
      "size.h": { $gt: 10 },
    })
    .toArray();
  console.log("data10 --> ", data10);
}

run();
