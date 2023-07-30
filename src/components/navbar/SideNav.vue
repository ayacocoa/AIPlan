<template>
  <transition name="tran-modal">
    <div class="modal" v-if="store.state.isSideNav.Nav">
      <textarea class="card" name="newCard"></textarea>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { ref } from "vue";
const store = useStore();
</script>

<style lang="scss" scoped>
.tran-modal {
  &-enter {
    &-from {
      transform: translateX(-360px);
    }
    &-active {
      transition: all 1s;
    }
    &-to {
      transform: translateX(0px);
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
      transform: translateX(-360px);
    }
  }
}
.modal {
  width: 12rem;
  height: 100%;
  position: fixed;
  left: 0;
  top: 56px;
  z-index: 9999;
  background-color: orange;
  opacity: 0.8;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);

  .card {
    width: 85%;
    height: 280px;
    resize: none;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
    margin: 10px;
    padding: 12px;
    font-size: 22px;
  }
}
</style>
