<template>
  <div>
    <img :src="oneroom.image" class="room-img" />
    <!-- 
      * 부모한테 메세지 보낼 때
        : $emit('작명', 데이터);
     -->
    <h4 @click="$emit('openModal', oneroom.id)">{{ oneroom.title }}</h4>
    <p>{{ oneroom.price }} 원</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  props: {
    oneroom: Object,
  },
};
</script>

<style></style>
