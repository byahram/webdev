/**
 * https://www.mongodb.com/ko-kr/docs/drivers/node/current/quick-start/
 * https://www.mongodb.com/ko-kr/docs/manual/crud/
 * https://www.mongodb.com/ko-kr/docs/manual/reference/operator/query/
 *
 */
const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("noona-testDB");
  const users = database.collection("users");
  const students = database.collection("students");
  const inventory = database.collection("inventory");
}

run();
