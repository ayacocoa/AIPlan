<template>
  <v-app>
    <TopBar />
    <v-main class="main">
      <div class="detailcard" v-if="store.state.isDetail.Detail">
        <DetailCard />
      </div>
      <div class="sidebox"><Vegetables /></div>
      <div class="contentbox">
        <v-card>
          <v-tabs v-model="tab" bg-color="green">
            <v-tab value="one">收藏</v-tab>
            <v-tab value="two">蔬菜</v-tab>
            <v-tab value="three">水果</v-tab>
            <v-tab value="four">肉蛋</v-tab>
            <v-tab value="five">主食</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one" class="content">
                <FoodCard
                  v-for="item in data"
                  :key="item.id"
                  :src="item.src"
                  :title="item.title"
                />
              </v-window-item>
              <v-window-item value="two" class="content"> Two </v-window-item>
              <v-window-item value="three" class="content">
                Three
              </v-window-item>
              <v-window-item value="four" class="content"> four </v-window-item>
              <v-window-item value="five" class="content"> five </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </div>
    </v-main>
    <BottomBar />
  </v-app>
</template>

<script setup lang="ts">
import TopBar from "../../components/navbar/TopBar.vue";
import BottomBar from "@/components/navbar/BottomBar.vue";
import Vegetables from "../../components/content/Vegetables.vue";
import FoodCard from "../../components/card/FoodCard.vue";
import DetailCard from "@/components/card/DetailCard.vue";
import { useStore } from "@/store";
import { VegetableApi } from "../../api/vegetables/vegetables";
import { VegetablesType } from "../../api/vegetables/types";
import { ref, onMounted, onBeforeMount, reactive } from "vue";
const store = useStore();
let tab = ref("");
let data: Array<VegetablesType> = reactive([]);
console.log(data);
onMounted(() => {
  VegetableApi.getVegetable().then((res) => {
    // @ts-ignore
    res.forEach((e) => {
      data.push(e);
    });
    // data = data.concat(res); //失去响应式
    // console.log(data);
    // console.log(res);
  });
});
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  .detailcard {
    position: fixed;
    top: 10rem;
    left: 5rem;
    z-index: 999;
    width: 16rem;
    height: 20rem;
  }
  .sidebox {
    position: fixed;
    left: 0;
    width: 4rem;
    height: 10%;
    background-color: orange;
  }
  .contentbox {
    position: fixed;
    left: 4rem;
    width: 20.5rem;
    height: 100%;
    .content {
      display: flex;
      flex-flow: row;
      justify-content: left;
      flex-wrap: wrap;
    }
  }
}
</style>
