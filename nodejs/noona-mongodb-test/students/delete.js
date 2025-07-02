const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("noona-testDB");
  const students = database.collection("students");

  //   [HW] 13. test2점수가 92점인 학생을 삭제
  const deleteOne = await students.deleteOne({ test2: 92 });
  console.log("deleteOne --> ", deleteOne);

  //   [HW] 14. test1의 점수가 0인 학생들을 삭제
  const deleteMany = await students.deleteMany({ test1: 0 });
  console.log("deleteMany --> ", deleteMany);
}

run();
