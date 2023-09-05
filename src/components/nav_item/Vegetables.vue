<template>
  <div>
    <div class="sidenav" @click="nav" v-if="onnav">
      
      <transition>  
      <div>
        <CardBox
        v-for="item in data"
        :key="item.id"
        :src="item.src"
        @click="Delete(item)"
        class="animated animate__fadeInLeft"
      /></div>
      </transition>
    </div>
    <!-- <div class="sidenav2" @click="nav" v-else>
      <v-icon size="x-large" color="green-darken-2" icon="mdi-carrot"></v-icon>
    </div> -->
    <button class="Submit">提交</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import CardBox from "../card/CardBox.vue";
import { useStore } from "@/store/index";
const store = useStore();
let onnav = ref(true);
const nav = () => {
  // onnav.value = !onnav.value;
  //TODO:扩展侧框函数
};
let data = reactive(store.state.vegetablesData.user_data_list);
const Delete = (item: Object) => {
  store.commit("vegetablesData/deleteData", item);
};
const Submit = () => {};
</script>

<style lang="scss" scoped>
.sidenav {
  position: fixed;
  left: 0;
  width: 4rem;
  background-color: orange;
  display: flex;
  // flex-direction: column;
  flex-flow: column;
  align-items: center;
}
.content {
  position: fixed;
  left: 4rem;
  width: 20rem;
}
.sidenav2 {
  position: fixed;
  left: 0;
  width: 10rem;
  height: 100%;
  background-color: orange;
}
.tran-modal {
  &-enter {
    &-from {
      transform: translateX(-6rem);
    }
    &-active {
      transition: all 1s;
    }
    &-to {
      transform: translateX(0rem);
    }
  }
  &-leave {
    &-from {
      transform: translateX(-0px);
    }
    &-active {
      transition: all 1s;
    }
    &-to {
      transform: translateX(-6rem);
    }
  }
}
</style>
