<template>
  <div class="card">
    <img :src="src" alt="" />
    <h2 v-if="false">蔬菜</h2>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  src: String,
});
</script>
<style lang="scss" scoped>
.card {
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 3.5rem;
    height: 3.5rem;
  }
}
</style>
