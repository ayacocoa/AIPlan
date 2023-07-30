<template>
  <v-app
    ><TopBar />
    <v-main class="main">
      <Vegetables />
    </v-main>
    <BottomBar />
  </v-app>
</template>

<script setup lang="ts">
import TopBar from "../../components/navbar/TopBar.vue";
import BottomBar from "@/components/navbar/BottomBar.vue";
import Vegetables from "../../components/expansion/Vegetables.vue";
</script>
<style lang="scss" scoped></style>
