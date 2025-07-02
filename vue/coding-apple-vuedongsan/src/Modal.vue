<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="black-bg" v-if="popup == true">
    <div class="white-bg">
      <img :src="onerooms[clickedIndex].image" alt="" style="width: 100%" />
      <h4>{{ onerooms[clickedIndex].title }}</h4>
      <p>{{ onerooms[clickedIndex].content }}</p>
      <!-- <input @input="month = $event.target.value" /> -->
      <!-- <textarea v-model="month"></textarea> -->
      <input v-model.number="month" />
      <p>
        {{ month }}개월 선택함: {{ onerooms[clickedIndex].price * month }}원
      </p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  data() {
    return {
      month: 1,
    };
  },
  // 데이터를 감시할 때
  watch: {
    month(a, b) {
      // a = 변경 후 month 데이터
      // b = 변경 전 month 데이터
      // month라는 데이터가 변할 때마다 여기있는 코드 실행됨
      if (a > 12) {
        alert("12 이상 입력하지 마세요.");
        this.month = b;
      }
      if (isNaN(a) == true) {
        alert("문자 입력하지 마세요.");
        this.month = 1;
      }
    },
  },
  beforeUpdate() {
    if (this.month == 2) {
      alert("2개월은 너무 적음.. 안팝니다");
      this.month == 3;
    }
  },
  props: {
    // 자식은 props로 받은 것 등록
    // props: {데이터이름: 자료형이름}
    onerooms: Array,
    clickedIndex: Number,
    popup: Boolean,
  },
  components: {},
};
</script>

<style></style>
