<template>
  <transition name="tran-modal">
    <div class="sidenav" @click="nav" v-if="onnav">
      <v-tabs v-model="tab" direction="vertical" color="primary" class="tabs">
        <v-tab value="option-1" class="tab">
          <v-icon
            size="x-large"
            color="green-darken-2"
            icon="mdi-alpha-v"
            class="icon"
          ></v-icon>
        </v-tab>
        <v-tab value="option-2" class="tab">
          <v-icon
            size="x-large"
            color="green-darken-2"
            icon="mdi-carrot"
            class="icon"
          ></v-icon>
        </v-tab>
        <v-tab value="option-3" class="tab"
          ><v-icon
            size="x-large"
            color="green-darken-2"
            icon="mdi-food-apple"
            class="icon"
          ></v-icon
        ></v-tab>
        <v-tab value="option-4" class="tab">
          <v-icon
            size="x-large"
            color="green-darken-2"
            icon="mdi-food-steak"
            class="icon"
          ></v-icon
        ></v-tab>
        <v-tab value="option-5" class="tab">
          <v-icon
            size="x-large"
            color="green-darken-2"
            icon="mdi-egg"
            class="icon"
          ></v-icon
        ></v-tab>
      </v-tabs>
    </div>
    <div class="sidenav2" @click="nav" v-else>
      <v-icon size="x-large" color="green-darken-2" icon="mdi-carrot"></v-icon>
    </div>
  </transition>
  <v-window v-model="tab">
    <v-window-item value="option-1">
      <v-card flat>
        <v-card-text class="content">
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac
            felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p>
            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.
            Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.
            Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet
            velit hendrerit rutrum.
          </p>
        </v-card-text>
      </v-card>
    </v-window-item>
    <v-window-item value="option-2">
      <v-card flat>
        <v-card-text class="content">
          <p>
            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.
            Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.
            Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet
            velit hendrerit rutrum.
          </p>
        </v-card-text>
      </v-card>
    </v-window-item>
  </v-window>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardBox from "../card/CardBox.vue";
let onnav = ref(true);
const nav = () => {
  // onnav.value = !onnav.value;
};
let tab = "option-1";
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
  .tabs {
    height: 100%;
    .tab {
      margin-top: 2rem;
      .icon {
        margin: 1rem 0;
        display: flex;
        justify-content: center;
        font-size: 5em;
      }
    }
  }
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
