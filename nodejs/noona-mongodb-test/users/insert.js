const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("noona-testDB");
  const users = database.collection("users");

  //   insertOne
  const userData = await users.insertOne({ name: "noona", age: 17 });
  console.log("userData --> ", userData);

  //   insertMany
  const userList = [
    { name: "철수", age: 30 },
    { name: "jessica", age: 25 },
  ];
  const userListResult = await users.insertMany(userList);
  console.log("userListResult --> ", userListResult);
}

run();
