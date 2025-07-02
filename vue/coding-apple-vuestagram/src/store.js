// Vue4 세팅
// 1. 모든 컴포넌트가 쓸 수 있는 데이터 저장용 js파일 만들기
//
// state를 수정하고 싶으면
// 1. 미리 store.js에 수정방법을 정의해두고
// 2. 그 방법을 컴포넌트에서 소환해서 수정해야함

import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      // 데이터 보관 여기에 (현재 상태 저장하는 곳)
      name: "kimmm",
      age: 20,
      likesCount: 10,
      likesClicked: false,
      more: {}, // 서버에서 더보기 게시물 가져와서 여기 저장
    };
  },
  mutations: {
    // mutations 안에 ajax 요청 X
    이름변경(state) {
      state.name = "park";
    },
    increment(state, data) {
      state.age += data;
    },
    likes(state) {
      if (state.likesClicked == false) {
        state.likesCount++;
        state.likesClicked = true;
      } else {
        state.likesCount--;
        state.likesClicked = false;
      }
    },
    // actions 후에 state 변경은 mutation에서 : state 변경은 무조건 mutations에서
    setMore(state, data) {
      state.more = data;
    },
  },
  actions: {
    // actions: {} > ajax 처리하는 곳 도는 오래 걸리는 작업들
    getData(context) {
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then((a) => {
          console.log(a.data);
          context.commit("setMore", a.data);
        })
        .catch();
    },
  },
});

export default store;
