<template>
  <div class="discount">
    <h4>지금 결제하면 {{ amount }}% 할인</h4>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Discount",
  props: {
    amount: Number,
  },
};
</script>

<style></style>
