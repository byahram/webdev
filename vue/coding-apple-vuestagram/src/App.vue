<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 1" @click="step++">Next</li>
        <li v-if="step == 2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <!-- 
      ** state value 변경 방법
      ** 버튼을 누르면 state 값을 바꿈
      1. store.js에 state수정방법 정의
      2. 수정하고 싶으면 store.js에 부탁
      
      - state 변경은 store.js에서만 -> state 이상하면 store.js에서 확인 가능
    -->
    <h4>안녕 {{ $store.state.name }}({{ $store.state.age }})</h4>
    <!-- store.js에 수정 부탁하려면 (commit : mutations 부탁) -->
    <button
      v-if="step != 3"
      @click="$store.commit('이름변경')"
      style="margin-right: 10px"
    >
      이름 변경 버튼
    </button>
    <!-- <button @click="$store.commit('increment', 2)">나이 변경 버튼</button> -->
    <button @click="increment(10)" v-if="step != 3">나이 변경 버튼</button>

    <p v-if="step != 3">{{ $store.state.more }}</p>
    <!-- 
      더보기 버튼 누르면
      1. dispatch('getData') : actions 부탁 
      2. 그럼 ajax로 데이터 가져오고
      3. mutations를 이용해서 state에 저장
    -->
    <button @click="$store.dispatch('getData')" v-if="step != 3">더보기</button>
    <!-- <button v-if="step == 0" @click="more">더보기</button> -->

    <Container :게시물="게시물" :step="step" :이미지="이미지" />

    <div class="footer">
      <ul class="footer-button-plus">
        <input
          @change="upload"
          multiple
          type="file"
          id="file"
          class="inputfile"
        />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>

    <div v-if="step == 0">내용0</div>
    <div v-if="step == 1">내용1</div>
    <div v-if="step == 2">내용2</div>
    <button v-if="step == 0" @click="step = 0">버튼0</button>
    <button v-if="step == 1" @click="step = 1">버튼1</button>
    <button v-if="step == 2" @click="step = 2">버튼2</button>
    <div style="margin-top: 500px"></div>
  </div>
</template>

<script>
import Container from "./components/Container";
import postdata from "./assets/postdata.js";
import { mapMutations, mapState } from "vuex";
// import axios from "axios";

export default {
  name: "App",
  data() {
    // ** 데이터 주고받기
    // 1. 하위컴포넌트 전송은 props
    // 2. 상위컴포넌트 전송은 custom event
    // 3. mitt
    return {
      step: 0,
      게시물: postdata,
      이미지: "",
      작성한글: "",
      선택한필터: "",
    };
  },
  mounted() {
    this.emitter.on("박스클릭함", (a) => {
      this.선택한필터 = a;
    });
  },
  components: {
    Container,
  },
  /**
   * 함수 만들 때 : computed vs methods
   */
  computed: {
    // computed: computed 함수는 사용해도 실행되지 않음. 처음 실행하고 값을 간직함. 계산결과저장용 함수들
    name() {
      return this.$store.state.name;
    },
    age() {
      return this.$store.state.age;
    },
    // state 하나 꺼내쓸 때도 computed 안에 사용하면 편하다.
    // vues state 한번에 꺼내쓰려면 1. ...mapState
    ...mapState(["name", "age", "likesCount", "likesClicked", "more"]),
    ...mapState({ 내이름: "name" }),
  },
  methods: {
    // vues state 한번에 꺼내쓰려면 2. ...mapMutations(['함수명'])
    ...mapMutations(["setMore", "likes", "increment", "이름변경"]),
    // method: methods 함수는 사용할 때마다 실행됨
    more() {
      // axios
      //   .get("https://codingapple1.github.io/vue/more0.json")
      //   .then((result) => {
      //     // 요청성공시 실행할 코드
      //     console.log(result.data);
      //     this.게시물.push(result.data);
      //   });
      // axios
      //   .post("URL", { name: "kim" })
      //   .then()
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    upload(e) {
      // 이미지 업로드
      // 1. FileReader() : 파일을 글자로 변환해줌
      // 2. URL.createObjectURL() : 이미지의 가상 URL을 생성해줌
      let file = e.target.files;
      console.log(file);
      let url = URL.createObjectURL(file[0]); // 이미지의 url 생성
      console.log(url);
      this.이미지 = url;
      this.step = 1;
    },
    publish() {
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.이미지,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: this.선택한필터,
      };
      this.게시물.unshift(내게시물); // 왼쪽의 array에 자료집어넣어줌
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
