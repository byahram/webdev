<!-- eslint-disable vue/valid-template-root -->
<template>
  <div
    @click="fire"
    :class="필터 + ' filter-item'"
    :style="`background-image:url(${이미지})`"
  >
    <!-- 
        ** slot으로 부모->자식 데이터전송법
        1. 자식은 구멍뚫기
        2. <컴포넌트> 태그사이에 데이터 넣기
        - 태그 안에 데이터바인딩할 때만 slot 사용가능

        ** slot 여러개 사용하는 법
        1. <slot name="a"></slot>
        2. <template v-slot:a>데이터</template>
    -->
    <slot name="a"></slot>

    <!-- 
        ** slot props
        - slot 사용할 때 부모가 자식데이터 필요한 경우
        1. <slot :자식데이터="자식데이터"></slot>
        2. 부모는 <template v-slot="작명">{{ 작명.자식데이터 }}</template>
     -->
    <!-- <slot :msg="msg"></slot> -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "filterbox",
  methods: {
    fire() {
      // mitt로 데이터 전송하는 법
      // 1. this.emitter.emit()으로 발사하고
      // 2. this.emitter.on()으로 수신
      // - 단 많이 쓰면 관리가 힘들어짐 : 대체품 Vuex
      this.emitter.emit("박스클릭함", this.필터);
    },
  },
  data() {
    return {
      msg: "hello",
    };
  },
  props: {
    이미지: String,
    필터: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
