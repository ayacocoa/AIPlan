<template>
  <v-app-bar dark color="orange">
    <v-app-bar-nav-icon @click="SideBar"> </v-app-bar-nav-icon>

    <v-toolbar-title>Simple Planning</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import store from "../../store/index";
const SideBar = () => {
  store.commit("isSideNav/ChangeSideNav");
};
</script>
<style scoped></style>
