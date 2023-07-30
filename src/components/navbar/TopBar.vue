<template>
  <v-app-bar dark color="orange">
    <v-app-bar-nav-icon @click="SideBar">
      <v-icon
        size="x-large"
        color="blue-darken-2"
        icon="mdi-arrow-left"
      ></v-icon>
    </v-app-bar-nav-icon>

    <v-toolbar-title>Simple to</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import router from "../../router/index";
const store = useStore();
const SideBar = () => {
  // store.commit("isSideNav/Change");
  router.back();
};
</script>
<style scoped></style>
