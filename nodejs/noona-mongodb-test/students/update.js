const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("noona-testDB");
  const students = database.collection("students");

  //   [HW] 11. students 컬렉션 데이터 넣고 id가 3인 학생에게 test3 의 점수를 98로 세팅
  const studentsList = [
    {
      _id: 1,
      test1: 95,
      test2: 92,
      test3: 90,
      modified: new Date("01/05/2020"),
    },
    {
      _id: 2,
      test1: 98,
      test2: 100,
      test3: 102,
      modified: new Date("01/05/2020"),
    },
    { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") },
  ];
  const insertStudentsList = await students.insertMany(studentsList);
  console.log("insertStudentsList --> ", insertStudentsList);

  const updateStudentsList = await students.updateOne({ _id: 3 }, [
    { $set: { test3: 98 } },
  ]);
  console.log("updateStudentsList --> ", updateStudentsList);

  //   [HW] 12. 모든데이터의 test1의 점수를 0으로 세팅하고 status:"modified"라는 필드를 추가
  const updateAll = await students.updateMany({}, [
    { $set: { status: "Modified", test1: 0 } },
  ]);
  console.log("updateAll --> ", updateAll);
}

run();
