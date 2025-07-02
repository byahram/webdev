const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("noona-testDB");
  const users = database.collection("users");

  //   updateOne
  //   update (조건 어디를?, 어떻게?)
  const updateUser = await users.updateOne(
    { name: "noona" },
    { $set: { age: 18 } }
  );
  console.log("updateUser --> ", updateUser);
}

run();
