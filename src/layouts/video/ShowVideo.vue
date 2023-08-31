<template>
  <!-- <div>
        loading...
    </div> -->
  <v-app>
    <top-bar></top-bar>
    <v-main>
      <!-- <div class="text-subtitle-2 mb-2">Default</div> -->

        <v-expansion-panels>
          <v-expansion-panel v-for="item in data" :key="item.id">
            <v-expansion-panel-title> {{item.title}} </v-expansion-panel-title>
            <v-expansion-panel-text >
              <template class="content">
                <div class="left">
                  <div class="video">
                <vue3VideoPlay v-bind="options(item.id)" />
              </div>
              <div class="description">{{ item.description }}</div>
                </div>
                
              <div class="ingredient">{{ item.ingredient }}</div>
              </template>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

    </v-main>

    <bottom-bar></bottom-bar>
  </v-app>
</template>
<script setup lang="ts">
import TopBar from "@/components/navbar/TopBar.vue";
import BottomBar from "@/components/navbar/BottomBar.vue";
import {VideoApi} from '@/api/video/video';
import {Data} from '@/api/video/types';
import { reactive,onMounted } from 'vue';
let data:Array <Data> = reactive([]); 
let options=(id:number) => reactive({
  width: '100%', //播放器高度
  height: '100%', //播放器高度
  color: "#409eff", //主题色
  title: '', //视频名称
  src: data[id-1].src, //视频源
  muted: true, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false,  //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns:['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] //显示所有按钮,
});
onMounted( () => {
 VideoApi.getVideoApi().then((res)=>{
  //@ts-ignore
  res.data.forEach((e) => {
      data.push(e);
    });
    console.log(data);
 })
 
});
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: space-between;
  .left{
    width: 60%;
    display: flex;
    flex-flow: column;
    .video{
    width: 100%;
    height: 8rem;
    object-fit: fill;
  }
  .description{
    width:100%;
    height: 10rem;
  }
  }

  .ingredient{
    width: 40%;
    height: 18rem;
    background-color: blue;
  }
}
.video{
  object-fit:fill
}
</style>