<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 
      $route는 현재경로
      $router는 페이지 이동 관련 기능
     -->
    <div>
      <h5 @click="$router.push('/detail/0')">{{ BlogConts[0].title }}</h5>
      <p>{{ BlogConts[0].date }}</p>
    </div>
    <div>
      <h5 @click="$router.push('/detail/1')">{{ BlogConts[1].title }}</h5>
      <p>{{ BlogConts[1].date }}</p>
    </div>
    <div>
      <h5 @click="$router.push('/detail/2')">{{ BlogConts[2].title }}</h5>
      <p>{{ BlogConts[2].date }}</p>
    </div>

    <!-- <div v-for="(BlogCont, index) in BlogConts" :key="index">
      <h5 @click="$router.push('/detail/0')">{{ BlogCont[index].title }}</h5>
      <p>{{ BlogCont[index].date }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "list",
  props: {
    BlogConts: Array,
  },
};
</script>

<style></style>
