<template>
  <div
    class="foodcard"
    @touchend="touchEnd"
    @touchstart="touchStart(props.id!)"
    @gotouchmove="gotouchMove"
    @click="Add(props.item!)"
  >
    <img :src="src" alt="" />
    <h2>{{ title }}</h2>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "@/store";
const store = useStore();
const props = defineProps({
  id: Number,
  src: String,
  title: String,
  item: Object,
});
let timeOutEvent: any;
/** 触屏开始 */
function touchStart(id: number) {
  clearTimeout(timeOutEvent); //清除定时器
  timeOutEvent = 0;
  timeOutEvent = setTimeout(() => {
    let data = store.state.vegetablesData.data.find((arr) => {
      return arr.id === id;
    });
    //长按行为的操作函数
    store.commit("isDetail/Change", data);
  }, 1000);
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
function Add(item: Object) {
  store.commit("vegetablesData/pushData", item);
}
</script>
<style lang="scss" scoped>
.foodcard {
  margin: 0.1rem;
  width: 6rem;
  height: 7rem;
  background-color: #fff;
  opacity: 0.8;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  img {
    width: 5rem;
    height: 5rem;
  }
}
</style>
