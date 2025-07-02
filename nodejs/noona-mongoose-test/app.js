/**
 * https://mongoosejs.com/docs/guide.html
 * https://mongoosejs.com/docs/validation.html
 * https://www.npmjs.com/package/validator
 */

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/noona-testDB");

const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // if (!value.includes("@")) {
        //   throw new Error("This is not an Email");
        // }

        // npm validator
        if (!validator.isEmail(value)) {
          throw new Error("This is not an Email");
        }
      },
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("users2", userSchema);

const newUser = new User({
  name: "ahram22",
  email: "ahram22@email.com",
  password: "                1234gjklgg",
  //   age: 25,
});

// 데이터 저장
newUser.save().then((value) => console.log("value is --> ", value));

// 모든 데이터 읽어오기
User.find().then((value) => console.log("all data --> ", value));

// 조건 데이터 읽어오기
User.find({ name: "ahram" }).then((value) => console.log("data --> ", value));

// 조건 데이터 원하는 정보만 읽어오기
User.find({ name: "ahram" })
  .select("name -_id")
  .then((value) => console.log("data --> ", value));
