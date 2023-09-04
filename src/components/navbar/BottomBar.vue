<template>
  <v-bottom-navigation :elevation="0" grow>

      <v-btn value="recent" @click="toMainfood">
        <v-icon>mdi-history</v-icon>

        Recent
      </v-btn>
      <v-btn value="video" @click="toVideo"> 
         <v-icon>mdi-heart</v-icon>
        Favorites
      </v-btn>
    

    <v-btn value="nearby" @click="toAI">
      <v-icon>mdi-map-marker</v-icon>

      Nearby
    </v-btn>
  </v-bottom-navigation>
</template>
<script setup lang="ts">
import router from '@/router/index'
const toMainfood = ()=>{
  router.push('/mainfood')
}
const toVideo = () =>{
  router.push('/video')
}
const toAI = () =>{
  router.push('/video')
}
</script>
