const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("noona-testDB");
  const users = database.collection("users");

  //   findOne
  const deleteUsers = await users.deleteMany({ age: { $gt: 20 } });
  console.log("deleteUsers --> ", deleteUsers);
}

run();
