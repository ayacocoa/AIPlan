<template>
  <v-app>
    <TopBar />
    <v-main class="main">
      <!-- <div class="detailcard" v-if="store.state.isDetail.Detail">
        <DetailCard />
      </div> -->
      <v-dialog v-model="store.state.isDetail.Detail" width="auto">
        <v-card>
          <v-card-title> {{ store.state.isDetail.data.title }} </v-card-title>
          <v-card-text>
            <v-img
              :src="store.state.isDetail.data.src"
              height="10rem"
              aspect-ratio="4/3"
              cover
            ></v-img>
            {{ store.state.isDetail.data.detail }}
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              block
              @click="store.state.isDetail.Detail = false"
              >关闭</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <div class="sidebox"><Food /></div>
      <div class="contentbox">
        <v-card>
          <v-tabs v-model="tab" bg-color="green">
            <v-tab value="one">收藏</v-tab>
            <v-tab value="two">蔬菜</v-tab>
            <v-tab value="three">水果</v-tab>
            <v-tab value="four">肉蛋</v-tab>
            <v-tab value="five">主食</v-tab>
          </v-tabs>

          <v-card-text class="cardtext">
            <v-window v-model="tab">
              <v-window-item value="one" class="content">
                <FoodCard
                  v-for="item in collectdata"
                  :key="item.id"
                  :item="item"
                  :id="item.id"
                  :src="item.src"
                  :title="item.title"
                />
              </v-window-item>
              <v-window-item value="two" class="content">
                <FoodCard
                  v-for="item in vegetablesdata"
                  :key="item.id"
                  :item="item"
                  :id="item.id"
                  :src="item.src"
                  :title="item.title"
                />
              </v-window-item>
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
import Food from "../../components/nav_item/Food.vue";
import FoodCard from "../../components/card/FoodCard.vue";
import DetailCard from "@/components/card/DetailCard.vue";
import { useStore } from "@/store";
import { FoodType } from "../../api/vegetables/types";
import { ref, onMounted, reactive } from "vue";
const store = useStore();
let tab = ref("");
let vegetablesdata: Array<FoodType> = reactive(store.state.vegetablesData.data);
let collectdata: Array<FoodType> = reactive(store.state.collectData.data);
onMounted(() => {
  if (!vegetablesdata.length) {
    store.commit("vegetablesData/getData");
  }
  // if (!collectdata.length) {
  //   store.commit("collectData/getData");
  // }
});
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  .detailcard {
    position: fixed;
    top: 4rem;
    left: 4rem;
    z-index: 999;
    width: 20rem;
    height: 20rem;
  }
  .sidebox {
    position: fixed;
    left: 0;
    width: 4rem;
    height: 100%;
    background-color: orange;
  }
  .contentbox {
    position: fixed;
    left: 4rem;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .cardtext {
      width: 90%;
      height: 100%;
      padding: 0;
      .content {
        width: 96%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 8rem;
      }
    }
  }
}
</style>
