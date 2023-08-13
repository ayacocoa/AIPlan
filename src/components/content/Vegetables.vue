<template>
  <transition name="tran-modal">
    <div class="sidenav" @click="nav" v-if="onnav"></div>
    <div class="sidenav2" @click="nav" v-else>
      <v-icon size="x-large" color="green-darken-2" icon="mdi-carrot"></v-icon>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardBox from "../card/CardBox.vue";
let onnav = ref(true);
const nav = () => {
  // onnav.value = !onnav.value;
};
</script>

<style lang="scss" scoped>
.sidenav {
  position: fixed;
  left: 0;
  width: 4rem;
  height: 100%;
  background-color: orange;
  display: flex;
  flex-direction: column;
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
