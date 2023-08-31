<template>
  <v-card class="mx-auto">
    <v-btn class="ma-2" @click="back">
      <v-icon start icon="mdi-arrow-left"></v-icon>返回
    </v-btn>
    <v-img
      :src="store.state.isDetail.data.src"
      height="10rem"
      aspect-ratio="4/3"
      cover
    ></v-img>

    <v-card-title> {{ store.state.isDetail.data.title }} </v-card-title>

    <v-card-subtitle> {{ store.state.isDetail.data.detail }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text" @click="show = !show">
        详细
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ store.state.isDetail.data.detail }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "@/store";
const store = useStore();
let show = ref(false);
const back = () => {
  store.commit("isDetail/Change");
};
</script>
<style lang="scss" scoped></style>
