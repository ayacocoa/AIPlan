<template>
  <v-card max-width="100%" class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <router-link to="mainfood">
            <v-card color="orange" theme="dark" class="secondcard threecards">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5"> Diet</v-card-title>

                  <v-card-subtitle>想好今天吃什么了吗?</v-card-subtitle>
                  <v-card-actions>
                    <v-btn class="ms-2" variant="outlined" size="small">
                      START
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar class="ma-3" size="125" rounded="0">
                  <v-img src="../../assets/images/food.jpg"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </router-link>
        </v-col>

        <v-col cols="12">
          <v-card color="#1F7087" theme="dark" class="secondcard threecards">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"> Supermodel </v-card-title>

                <v-card-subtitle>Foster the People</v-card-subtitle>

                <v-card-actions>
                  <v-btn class="ms-2" variant="outlined" size="small">
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" rounded="0">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card color="#952175" theme="dark" class="thirdcard threecards">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"> Halcyon Days </v-card-title>

                <v-card-subtitle>Ellie Goulding</v-card-subtitle>

                <v-card-actions>
                  <v-btn class="ms-2" icon="mdi-play" variant="text"></v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" rounded="0">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.threecards {
  height: 10rem;
  margin: 0.5rem 0;
}
.firstcard {
  background: url(../../assets//food.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
