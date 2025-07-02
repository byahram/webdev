const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("noona-testDB");
  const users = database.collection("users");

  //   findOne
  const findUser = await users.findOne({ name: "noona" });
  console.log("findUser --> ", findUser);

  //   find
  const findAllUser = await users.find({}).toArray();
  console.log("findAllUser --> ", findAllUser);

  //   find - condition
  const findAdult = await users.find({ age: { $gt: 20 } }).toArray();
  console.log("findAdult --> ", findAdult);

  //   find - project
  const userDataWithoutId = await users
    .find({ name: "noona" })
    .project({ _id: 0 }) // id를 빼고
    .toArray();
  console.log("userDataWithoutId --> ", userDataWithoutId);
}

run();
