<template>
  <v-app>
    <top-bar />
    <side-nav />
    <v-main class="main">
      <enter-card class="entercard" />
    </v-main>
    <bottom-bar />
  </v-app>
</template>

<script lang="ts" setup>
import TopBar from "@/components/navbar/TopBar.vue";
import EnterCard from "@/components/card/EnterCard.vue";
import BottomBar from "@/components/navbar/BottomBar.vue";
import SideNav from "@/components/navbar/SideNav.vue";
</script>
<style lang="scss" scoped>
.main {
  background-color: #f2f2ff;
  .entercard {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
