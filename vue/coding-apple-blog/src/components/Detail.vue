<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mt-3">
    <h4>상세페이지</h4>
    <!-- 현재 URL 정보는 $route에 담겨있음 -->
    <h5>{{ BlogConts[$route.params.id].title }}</h5>
    <p>{{ BlogConts[$route.params.id].content }}</p>

    <!-- children: {} 안에 있는 컴포넌트를 여기다 보여줌 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    BlogConts: Array,
  },
};
</script>

<style></style>
