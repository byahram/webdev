<template>
  <div>
    <!--
      축약해둔 컴포넌트 쓰는 법
      1. vue파일 import해오고
      2. components: {}에 등록 후 사용
      -->
    <!-- <div class="start" :class="{ end: popup }"> -->
    <transition name="fade">
      <Modal
        @closeModal="popup = false"
        :onerooms="onerooms"
        :clickedIndex="clickedIndex"
        :popup="popup"
      />
    </transition>
    <!-- </div> -->

    <div class="menu">
      <!-- 
        <태그 v-for="작명 in 몇회" :key="작명"> 
        <태그 v-for="(작명, index) in 몇회" :key="index"> 
        :key="" 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀
        -->
      <a v-for="menu in menus" :key="menu">{{ menu }}</a>
    </div>

    <Discount v-if="showDiscount == true" :amount="amount" />

    <button @click="priceSort" style="margin-right: 5px">가격순정렬</button>

    <button @click="sortBack">되돌리기</button>

    <!-- 
      부모가 자식의 메시지를 수실할 때
      : @작명=""
     -->
    <Card
      @openModal="
        popup = true;
        clickedIndex = $event;
      "
      :oneroom="onerooms[index]"
      v-for="(oneroom, index) in onerooms"
      :key="index"
    />

    <!-- 
      * if/else
      1. 
        <div v-if="1 == 2">안녕하세요</div>
        <div v-else>안녕하세요2</div>
      2.
      <div v-if="1 == 2">안녕하세요</div>
      <div v-else-if="1 == 3">안녕하세요2</div> 
      -->

    <!-- 
      * 데이터 바인딩 : JS 데이터를 HTML에 꽂아넣는 문법

      * 데이터 바인딩 하는 이유
        1. HTML에 하드코딩 해놓으면 나중에 변경 어려움 
        2. Vue의 실시간 자동 렌더링 쓰기 위해

      * HTML 속성도 데이터 바인딩 가능   ->   :속성='데이터이름'
    -->

    <!-- <div v-for="(product, i) in products" :key="i">
      <img :src="images[i]" alt="" class="room-img" />
      <h4 @click="popup = true">{{ product }}</h4>
      <p>50만원</p>
      <button v-on:click="report[i]++">허위매물신고</button>
      <span> 신고수 : {{ report[i] }}</span>
    </div> -->
  </div>
</template>

<script>
import lists from "./data/oneroom.js";
import Modal from "./Modal.vue";
import Discount from "./Discount.vue";
import Card from "./Card.vue";

/**
 * LIFECYCLE 순서
 *
 * beforeCreate()
 * created()
 * beforeMount()
 * mounted()
 * beforeUpdate()
 * updated()
 * beforeUnmount()
 * unmounted()
 */
export default {
  name: "App",
  // 데이터 보관함
  data() {
    // 데이터는 objecct 자료로 저장
    return {
      // array/object 데이터의 각각 별개의 사본을 만들려면 [...array자료]
      oneroomsOrigin: [...lists],
      clickedIndex: 0,
      onerooms: lists,
      popup: false,
      showDiscount: true,
      amount: 30,
      menus: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      report: [0, 0, 0],
      images: [
        "./assets/room0.jpg",
        "./assets/room1.jpg",
        "./assets/room2.jpg",
      ],
    };
  },
  // 함수 만드는 공간
  methods: {
    // 함수안에서 데이터 쓸 땐 this.데이터명
    increase() {
      this.report += 1;
    },
    priceSort() {
      this.onerooms.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    sortBack() {
      this.onerooms = [...this.oneroomsOrigin];
    },
  },
  // mounted() : component가 html에 다 장착되어서 잘 보이느 상태
  mounted() {
    // this를 쓸 일이 있으면 arrow 함수를 사용하는 편
    // setTimeout(() => {
    //   this.showDiscount = false;
    // }, 2000);
    setInterval(() => {
      this.amount--;
    }, 1000);
  },
  created() {
    // ajax 요청
  },
  components: {
    Modal: Modal,
    Discount: Discount,
    Card: Card,
  },
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
.start {
  opacity: 0;
  transition: all 1s;
}
.end {
  opacity: 1;
}
/*
 *  * 입장 애니메이션
 *  .name-enter-from       --> 시작시 스타일
 *  .name-enter-active     --> transition
 *  .name-enter-to         --> 끝날시 스타일

 *  * 퇴장 애니메이션
 *  .name-leave-from       --> 시작시 스타일
 *  .name-leave-active     --> transition
 *  .name-leave-to         --> 끝날시 스타일
 */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
