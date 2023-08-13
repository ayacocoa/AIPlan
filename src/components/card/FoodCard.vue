<template>
  <div
    class="foodcard"
    @touchend="touchEnd"
    @touchstart="touchStart"
    @gotouchmove="gotouchMove"
  >
    <img :src="src" alt="" />
    <h2>{{ title }}</h2>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "@/store";
const store = useStore();
const props = defineProps({
  src: String,
  title: String,
});
let timeOutEvent: any;
/** 触屏开始 */
function touchStart() {
  clearTimeout(timeOutEvent); //清除定时器
  timeOutEvent = 0;
  timeOutEvent = setTimeout(() => {
    //长按行为的操作函数
    store.commit("isDetail/Change");
  }, 1000); //这里设置定时
}
/** 触屏结束 */
function touchEnd() {
  clearTimeout(timeOutEvent);
  if (timeOutEvent != 0) {
  }
}
/**定时器清除 */
function gotouchMove() {
  clearTimeout(timeOutEvent); //清除定时器
  timeOutEvent = 0;
}
</script>
<style lang="scss" scoped>
.foodcard {
  width: 4rem;
  height: 5rem;
  background-color: #fff;
  opacity: 0.8;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  img {
    width: 3rem;
    height: 3rem;
  }
}
</style>
