import { Module } from "vuex";
import { TypeRootState } from "@/store/type";
import { VegetableApi } from "../../api/food/vegetables";
import { FoodType } from "@/api/food/types";

export interface TypeVegetablesStateApp {
  data: Array<FoodType>;
  user_data_list: Array<FoodType>;
}

export const vegetablesData: Module<TypeVegetablesStateApp, TypeRootState> = {
  namespaced: true,
  state: () => ({
    data: [],
    user_data_list: [],
  }),
  mutations: {
    getData(state) {
      // state.data = [];
      VegetableApi.getVegetable().then((res) => {
        console.log(res)
        // @ts-ignore
        res.data.forEach((e) => {
          state.data.push(e);
        });
      });
    },
    pushData(state, data) {
      state.user_data_list.push(data);
    },
    deleteData(state, data) {
      const index = state.user_data_list.findIndex((e) => {
        return e.id === data.id;
      });
      console.log(index)
      state.user_data_list.splice(index, 1);
    },
  },
};
